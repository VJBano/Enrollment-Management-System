import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import { Container } from '@mui/material';

const BarGraph = () => {

    const chartSetting = {
        yAxis: [
          {
            label: 'student (student)',
          },
        ],
        width: 600,
        height: 300,
        sx: {
          [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'translate(-20px, 1)',
          },
        },
      };

      const dataset = [
        {
          dropout: 59,
          graduate: 86,
          enrolled: 21,
          year: new Date().getFullYear()-11,
        },
        {
          dropout: 50,
          graduate: 78,
          enrolled: 28,
          year: new Date().getFullYear()-10,
        },
        {
          dropout: 47,
          graduate: 106,
          enrolled: 41,
          year: new Date().getFullYear()-9,
        },
        {
          dropout: 54,
          graduate: 92,
          enrolled: 73,
          year: new Date().getFullYear()-8,
        },
        {
          dropout: 57,
          graduate: 92,
          enrolled: 99,
          year: new Date().getFullYear() - 7,
        },
        {
          dropout: 60,
          graduate: 103,
          enrolled: 144,
          year: new Date().getFullYear()-6,
        },
        {
          dropout: 59,
          graduate: 105,
          enrolled: 319,
          year: new Date().getFullYear()-5,
        },
        {
          dropout: 65,
          graduate: 106,
          enrolled: 249,
          year: new Date().getFullYear()-4,
        },
        {
          dropout: 51,
          graduate: 95,
          enrolled: 131,
          year: new Date().getFullYear()-3,
        },
        {
          dropout: 60,
          graduate: 97,
          enrolled: 55,
          year: new Date().getFullYear() -2,
        },
        {
          dropout: 67,
          graduate: 76,
          enrolled: 48,
          year: new Date().getFullYear() -1,
        },
        {
          dropout: 61,
          graduate: 103,
          enrolled: 25,
          year: new Date().getFullYear(),
        },
      ];

      const valueFormatter = (value: number) => `${value} students`;

  return (
    <Container maxWidth={false} disableGutters sx={{backgroundColor:"#CCD3CA", borderRadius:2}}>
      <BarChart
     
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'year' }]}
      series={[
        { dataKey: 'dropout', label: 'Drop-Out', valueFormatter },
        { dataKey: 'enrolled', label: 'Enrolled', valueFormatter },
        { dataKey: 'graduate', label: 'Graduate', valueFormatter },
      ]}
      {...chartSetting}
    />
    </Container>
  )
}

export default BarGraph
