import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
} from 'chart.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Doughnut } from 'react-chartjs-2';
import { getInfo } from '../redux/country/country-slice';
import '../stylesheet/Country.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const POLLUTANTS = ['CO', 'NH3', 'NO', 'NO2', 'O3', 'PM2_5', 'PM10', 'SO2'];

const chartData = (infoArr) => {
  const data = POLLUTANTS.map((pollutant) => infoArr[pollutant.toLowerCase()]);
  const backgroundColors = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(94, 94, 94, 0.2)',
    'rgba(0, 0, 0, 0.2)',
  ];
  const borderColors = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
    'rgba(94, 94, 94, 1)',
    'rgba(0, 0, 0, 1)',
  ];

  return {
    labels: POLLUTANTS,
    datasets: [
      {
        label: 'Quantity',
        data,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };
};

// eslint-disable-next-line react/prop-types
const ChartRadar = ({ data }) => <Doughnut data={data} />;

const Country = () => {
  const {
    info, lat, lon, name,
  } = useParams();
  const infoArr = useSelector((state) => state.info);
  const dispatch = useDispatch();

  useEffect(() => {
    const coor = [lat, lon];
    dispatch(getInfo(coor));
  }, [dispatch, lat, lon]);

  const data = chartData(infoArr);

  return (
    <div className="country">
      <nav className="navCountry">
        <Link to="..">
          <i className="fa-solid fa-chevron-left" />
          &nbsp;COUNTRIES
        </Link>
        <h2>Country</h2>
        <i className="fa-solid fa-microphone" />
        <i className="fa-solid fa-gear" />
      </nav>
      <div className="infoCountry">
        <img
          alt={info}
          src={`https://raw.githubusercontent.com/Ginohmk/worldMaps/main/maps/${info}/vector.svg`}
        />
        <h3>{name}</h3>
        <div className="infoPollution">
          <h4>Air Pollution</h4>
          {POLLUTANTS.map((pollutant) => (
            <p key={pollutant}>
              {`${pollutant}: ${infoArr[pollutant.toLowerCase()]}`}
            </p>
          ))}
        </div>
        <div className="chart">
          <h2>Doughnut Chart</h2>
          <ChartRadar data={data} />
        </div>
      </div>
    </div>
  );
};

export default Country;
