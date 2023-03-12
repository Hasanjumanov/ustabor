import './style/home.scss';
import home from '../components/builder.webp'

function Home() {
    return (
        <>
            <div className="contioner">
                <div className="home">
                    <h1>Barcha holatlar uchun
                        ustalarni qidiring
                    </h1>
                    <p>Ustabor.uz ga kiring — ustani toping!</p>
                    <div className="search">
                        <input type="text" placeholder="Qaysi ishga usta kerak?" />
                        <button>BUYURTMA QOLDIRING</button>
                    </div>

                </div>
                <div className="image">
                    <img src={home} alt="" />
                </div>
            </div>
            <div className="static">
                <div className="bir">
                    <div className="bir1">
                        <i class="fa-solid fa-check"></i>
                    </div>
                    <div className="bir2">
                        <h1>10 866</h1>
                        <p>Ustalarning aloqalari <br /> bilan so'rovnoma</p>
                    </div>
                </div>
                <div className="bir">
                    <div className="bir1">
                        <i class="fa-solid fa-thumbs-up"></i>
                    </div>
                    <div className="bir2">
                        <h1>95%</h1>
                        <p>ta Ijobiy fikr- <br /> mulohazalarga ega usta</p>
                    </div>
                </div>
                <div className="bir">
                    <div className="bir1">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="bir2">
                        <h1>216</h1>
                        <p>ta buyurtmani Biz har <br /> kuni koʻrib chiqamiz</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
