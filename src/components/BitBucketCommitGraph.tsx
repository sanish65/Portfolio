import  { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const BitBucketCommitGraph = () => {
  const [commits, setCommits] = useState<any[]>([]);
  const [chartData, setChartData] = useState<any>(null);

  const fetchCommits = async () => {
    const workspace = import.meta.env.VITE_BITBUCKET_PROJECT; 
    const repoSlug = import.meta.env.VITE_BITBUCKET_REPO_SLUG;
    const token = import.meta.env.VITE_BITBUCKET_TOKEN;

    try {
      const response = await fetch(`https://api.bitbucket.org/2.0/repositories/${workspace}/${repoSlug}/commits`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setCommits(data.values);
        formatChartData(data.values);
      } else {
        return (
          <p>Bit bucket commit graph under progress ... </p>
          )
      }
    } catch (error) {
      console.error('Error fetching commits:', error);
    }
  };

  const formatChartData = (commitData: any[]) => {
    const labels = commitData.map(commit => new Date(commit.date).toLocaleDateString());
    const data = commitData.map(commit => commit.author.display_name);

    setChartData({
      labels: labels,
      datasets: [
        {
          label: 'Commits',
          data: data,
          fill: false,
          borderColor: 'rgba(75,192,192,1)',
          tension: 0.1,
        },
      ],
    });
  };

  useEffect(() => {
    fetchCommits();
  }, []);

  return (
    <div>
      <h2>BitBucket Commit Graph</h2>
      <p>Bit bucket commit graph under progress ... </p>
      {chartData && (
        <Line
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'Commit History',
              },
              tooltip: {
                callbacks: {
                  label: (tooltipItem) => `Commit by: ${tooltipItem.raw}`,
                },
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default BitBucketCommitGraph;
