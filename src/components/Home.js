import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContinents } from '../redux/home/home-slice';
import continents from '../redux/home/data/continents';
import '../stylesheet/Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const continentsArr = useSelector((state) => state.continents);

  useEffect(() => {
    dispatch(getContinents(continents));
  }, [dispatch]);

  const renderContinents = () => continentsArr.map((continent) => {
    const { name, img } = continent;
    const imgSrc = `https://raw.githubusercontent.com/Ginohmk/worldMaps/main/maps/${img}/vector.svg`;

    return (
      <Link key={name} to={`/${name}`}>
        <div>
          <img alt={name} src={imgSrc} />
          <p>{name.toUpperCase()}</p>
        </div>
      </Link>
    );
  });

  return (
    <>
      <nav className="navHome">
        <h2>Continents</h2>
        <i className="fa-solid fa-microphone" />
        <i className="fa-solid fa-gear" />
      </nav>
      <div className="continents">{renderContinents()}</div>
    </>
  );
};

export default Home;
