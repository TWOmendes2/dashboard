import hello from '../../assets/hello.png';
import Chart from '../charts/chart.js';

import './main.css';

const Main = ()=>{
    return (
        <main>
            <div className="main__container">
                <div className="main__title">
                    <img src={hello} alt="helo"/>
                    <div className="main__greeting">
                        <h1>Olá Nómada</h1>
                        <p>Bem Vindo ao Dashbord</p>
                    </div>
                </div>
                <div className="main__cards">
                    <div className="card">
                        <i className="ph ph-files text-ligthblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Número de pedidos</p>
                            <span className="font-bold text-title">578</span>
                        </div>
                    </div>
                    <div className="card">
                        <i className="ph ph-currency-dollar text-red"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Pagamentos</p>
                            <span className="font-bold text-title">R$ 456.231,56</span>
                        </div>
                    </div>
                    <div className="card">
                        <i className="ph ph-archive text-yellow"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Números de produtos</p>
                            <span className="font-bold text-title">26</span>
                        </div>
                    </div>
                    <div className="card">
                        <i className="ph ph-chart-bar-horizontal text-green"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Categorias</p>
                            <span className="font-bold text-title">6</span>
                        </div>
                    </div>
                </div>
                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Daily reports</h1>
                                <p>Maceios, Alagoas, BR</p>
                            </div>
                            <i className="ph ph-chart-line"></i>
                        </div>
                        <Chart/>
                    </div>
                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>Daily reports</h1>
                                <p>Maceios, Alagoas, BR</p>
                            </div>
                            <i className="ph ph-currency-dollar"></i>
                        </div>
                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Lucro</h1>
                                <p>R$ 398.869,98</p>
                            </div>
                            <div className="card2">
                                <h1>Pagamentos</h1>
                                <p>R$ 24.865,98</p>
                            </div>
                            <div className="card3">
                                <h1>Custo Equipamentos</h1>
                                <p>R$ 8.546,93</p>
                            </div>
                            <div className="card4">
                                <h1>Extra</h1>
                                <p>R$ 3.763,04</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Main;



