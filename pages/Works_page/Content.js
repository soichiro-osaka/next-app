import styles from './styles/Content.module.css'
import Results from './Results'
import {useState} from 'react'

export default function Content() {
    const [city, setCity] = useState("");
    const [results, setResults] = useState({
        country: "",
        cityName:"",
        temperature:"",
        feelslike_tmp:"",
        conditionText: "",
        icon: "",
        wind_kph: "",
        wind_dir: "",
    });
    const getWeather = (e) => {
        e.preventDefault();
        fetch("https://api.weatherapi.com/v1/current.json?key=6e0cdba4eec44afab75102542212903&q=London&aqi=no")
        .then(res => res.json())
        .then(data => {
            setResults({
                country: data.location.country,
                cityName: data.location.name,
                temperature: data.current.temp_c,
                feelslike_tmp: data.current.feelslike_c,
                conditionText: data.current.condition.text,
                icon: data.current.condition.icon,
                wind_kph: data.current.wind_kph,
                wind_dir: data.current.wind_dir,
            })
        })

    }
    return(
        <div className={styles.content}>
            <form className={styles.weather_input}>
                <input onChange={e => setCity(e.target.value)}></input>
                <button onClick={getWeather}>get Weather</button>
            </form>
            {results.country && <Results results={results}/>}
            {!results.country && (
                <div className={styles.arrow_div}>
                    <i className="fas fa-arrow-circle-up"></i>
                    <p>ここに地名を入力してください。</p>
                </div>
            )}
        </div>
    )
}