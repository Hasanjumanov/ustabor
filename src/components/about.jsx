import './style/about.scss';

function About() {
    return (
        <>
            <div className="main">
                <h1>Bizning kategoriyalarimiz</h1>
                <div className="about">
                    <div className="bir">
                        <i class="fa-solid fa-helmet-safety"></i>
                        <h1>Qurilish Ishlari</h1>
                        <a href="">Chilangarlar</a>
                        <a href="">Suvoq va bo'yoq ishlari</a>
                        <a href="">Elektriklar</a>
                    </div>
                    <div className="bir">
                        <i class="fa-solid fa-car"></i>
                        <h1>Avtomabil ta'mirlash</h1>
                        <a href="">Usta chaqirish</a>
                        <a href="">Avtoelektrik</a>
                        <a href="">AKKP MKPP ta'mirlash</a>
                    </div><div className="bir">
                        <i class="fa-solid fa-tv"></i>
                        <h1>Maishiy Texnika</h1>
                        <a href="">Konditsionerlar</a>
                        <a href="">Kir yuvish mashinasi</a>
                        <a href="">Sovutgichlar</a>
                    </div>
                    <div className="bir">
                        <i class="fa-solid fa-screwdriver-wrench"></i>
                        <h1>Maishiy xizmat</h1>
                        <a href="">Xonadonni tozalash</a>
                        <a href="">Soat sozlash</a>
                        <a href="">Tikuvchilik xizmatlari</a>
                    </div>
                </div>
                <div className="p">
                    <p>Bizning saytimizda har qanday vazifa uchun mutaxassislar mavjud. Katalogdan usta izlashingizning hojati ham yo'q — ariza shaklini to'ldiring va bizning operatorlarimizning o'zlari uni siz uchun topib berishadi</p>
                </div>
                <div className="btns">
                    <button>Buyurtma qoldiring</button>
                    <button>Katologa o'tish <i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </>
    );
}

export default About
