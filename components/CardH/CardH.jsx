import h from './CardH.module.scss'
import {BiSearch} from "react-icons/bi";
import {HiOutlinePhone} from "react-icons/hi";
import {TbTruckDelivery} from "react-icons/tb";
import {FiHeart} from "react-icons/fi";
import {BsBag} from "react-icons/bs";
import {FiUser} from "react-icons/fi";
import Link from "next/link";
import Burger from "@/components/CardH/Burger/Burger";
import {useSelector} from "react-redux";

const CardH = () => {

    const {user} = useSelector(state => state.user)

    return (
        <header className={h.header}>
            <div className="container">
                <nav className={h.header__nav}>
                    <div className={h.header__burger}>
                        <Burger/>
                    </div>
                    <Link href="/" className={h.header__title}>
                        <svg width="113" height="25" viewBox="0 0 113 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.49936 21.3204C0.366197 21.3204 0.246351 21.2737 0.139821 21.1804C0.0466069 21.0737 0 20.9537 0 20.8204V7.82176C0 7.67511 0.0466069 7.55512 0.139821 7.4618C0.246351 7.36847 0.366197 7.32181 0.49936 7.32181H2.65659C2.97618 7.32181 3.20922 7.46846 3.3557 7.76176L6.87119 14.0611L10.3867 7.76176C10.5332 7.46846 10.7662 7.32181 11.0858 7.32181H13.223C13.3695 7.32181 13.4894 7.36847 13.5826 7.4618C13.6891 7.55512 13.7424 7.67511 13.7424 7.82176V20.8204C13.7424 20.9671 13.6891 21.0871 13.5826 21.1804C13.4894 21.2737 13.3695 21.3204 13.223 21.3204H10.8461C10.6996 21.3204 10.5731 21.2737 10.4666 21.1804C10.3734 21.0871 10.3268 20.9671 10.3268 20.8204V13.3212L8.08963 17.5008C7.91652 17.8074 7.68348 17.9607 7.39052 17.9607H6.35185C6.17874 17.9607 6.03892 17.9207 5.93239 17.8407C5.82586 17.7607 5.73265 17.6474 5.65275 17.5008L3.39565 13.3212V20.8204C3.39565 20.9537 3.34904 21.0737 3.25583 21.1804C3.16261 21.2737 3.04276 21.3204 2.89629 21.3204H0.49936Z" fill="#2E2E2E"/>
                            <path d="M23.3326 21.3204C23.1994 21.3204 23.0796 21.2737 22.973 21.1804C22.8798 21.0737 22.8332 20.9537 22.8332 20.8204V7.82176C22.8332 7.67511 22.8798 7.55512 22.973 7.4618C23.0796 7.36847 23.1994 7.32181 23.3326 7.32181H32.6606C32.8071 7.32181 32.9269 7.36847 33.0202 7.4618C33.1134 7.55512 33.16 7.67511 33.16 7.82176V9.70157C33.16 9.83489 33.1134 9.95487 33.0202 10.0615C32.9269 10.1549 32.8071 10.2015 32.6606 10.2015H26.2888V12.9012H32.2212C32.3677 12.9012 32.4875 12.9546 32.5807 13.0612C32.6739 13.1545 32.7205 13.2745 32.7205 13.4212V15.161C32.7205 15.2943 32.6739 15.4143 32.5807 15.521C32.4875 15.6143 32.3677 15.661 32.2212 15.661H26.2888V18.4407H32.8204C32.9669 18.4407 33.0867 18.4873 33.18 18.5807C33.2732 18.674 33.3198 18.794 33.3198 18.9406V20.8204C33.3198 20.9537 33.2732 21.0737 33.18 21.1804C33.0867 21.2737 32.9669 21.3204 32.8204 21.3204H23.3326Z" fill="#2E2E2E"/>
                            <path d="M42.3816 21.3204C42.2484 21.3204 42.1286 21.2737 42.0221 21.1804C41.9288 21.0737 41.8822 20.9537 41.8822 20.8204V7.82176C41.8822 7.67511 41.9288 7.55512 42.0221 7.4618C42.1286 7.36847 42.2484 7.32181 42.3816 7.32181H51.9693C52.1158 7.32181 52.2356 7.36847 52.3288 7.4618C52.422 7.55512 52.4687 7.67511 52.4687 7.82176V9.82155C52.4687 9.96821 52.422 10.0949 52.3288 10.2015C52.2356 10.2948 52.1158 10.3415 51.9693 10.3415H45.4776V12.7013H48.2541C49.852 12.7013 51.1104 13.0812 52.0292 13.8411C52.948 14.6011 53.4075 15.641 53.4075 16.9608C53.4075 17.7874 53.2077 18.534 52.8082 19.2006C52.4087 19.8539 51.8228 20.3738 51.0505 20.7604C50.2781 21.1337 49.346 21.3204 48.2541 21.3204H42.3816ZM47.9345 18.7206C48.4804 18.7206 48.9066 18.5473 49.2128 18.2007C49.5324 17.8541 49.6922 17.4341 49.6922 16.9408C49.6922 16.4475 49.5391 16.0409 49.2328 15.721C48.9265 15.401 48.4938 15.241 47.9345 15.241H45.4776V18.7206H47.9345Z" fill="#2E2E2E"/>
                            <path d="M61.8012 21.3204C61.6681 21.3204 61.5482 21.2737 61.4417 21.1804C61.3485 21.0737 61.3019 20.9537 61.3019 20.8204V7.82176C61.3019 7.67511 61.3485 7.55512 61.4417 7.4618C61.5482 7.36847 61.6681 7.32181 61.8012 7.32181H71.1293C71.2757 7.32181 71.3956 7.36847 71.4888 7.4618C71.582 7.55512 71.6286 7.67511 71.6286 7.82176V9.70157C71.6286 9.83489 71.582 9.95487 71.4888 10.0615C71.3956 10.1549 71.2757 10.2015 71.1293 10.2015H64.7574V12.9012H70.6898C70.8363 12.9012 70.9561 12.9546 71.0494 13.0612C71.1426 13.1545 71.1892 13.2745 71.1892 13.4212V15.161C71.1892 15.2943 71.1426 15.4143 71.0494 15.521C70.9561 15.6143 70.8363 15.661 70.6898 15.661H64.7574V18.4407H71.2891C71.4355 18.4407 71.5554 18.4873 71.6486 18.5807C71.7418 18.674 71.7884 18.794 71.7884 18.9406V20.8204C71.7884 20.9537 71.7418 21.0737 71.6486 21.1804C71.5554 21.2737 71.4355 21.3204 71.2891 21.3204H61.8012Z" fill="#2E2E2E"/>
                            <path d="M89.7189 21.3204C89.5857 21.3204 89.4659 21.2737 89.3593 21.1804C89.2661 21.0737 89.2195 20.9537 89.2195 20.8204V10.5215H85.5043V12.3413C85.5043 14.5944 85.3578 16.3542 85.0648 17.6208C84.7719 18.874 84.2326 19.8005 83.4469 20.4005C82.6746 20.9871 81.5493 21.2937 80.0712 21.3204C79.9248 21.3204 79.7982 21.2737 79.6917 21.1804C79.5852 21.0737 79.5319 20.9471 79.5319 20.8004V18.7006C79.5319 18.4207 79.6984 18.2474 80.0313 18.1807C80.7504 18.0607 81.263 17.4741 81.5693 16.4209C81.8756 15.3543 82.0287 13.8411 82.0287 11.8813V7.82176C82.0287 7.67511 82.0753 7.55512 82.1685 7.4618C82.2751 7.36847 82.4016 7.32181 82.548 7.32181H92.2956C92.442 7.32181 92.5619 7.36847 92.6551 7.4618C92.7616 7.55512 92.8149 7.67511 92.8149 7.82176V20.8204C92.8149 20.9671 92.7616 21.0871 92.6551 21.1804C92.5619 21.2737 92.442 21.3204 92.2956 21.3204H89.7189Z" fill="#2E2E2E"/>
                            <path d="M102.377 21.3204C102.243 21.3204 102.124 21.2737 102.017 21.1804C101.924 21.0737 101.877 20.9537 101.877 20.8204V7.82176C101.877 7.67511 101.924 7.55512 102.017 7.4618C102.124 7.36847 102.243 7.32181 102.377 7.32181H104.953C105.1 7.32181 105.22 7.36847 105.313 7.4618C105.419 7.55512 105.473 7.67511 105.473 7.82176V12.1213H107.57C109.301 12.1213 110.633 12.5079 111.565 13.2812C112.497 14.0411 112.963 15.1677 112.963 16.6609C112.963 18.074 112.49 19.2073 111.545 20.0605C110.613 20.9004 109.288 21.3204 107.57 21.3204H102.377ZM107.49 18.5407C108.049 18.5407 108.482 18.3673 108.788 18.0207C109.095 17.6741 109.248 17.2208 109.248 16.6609C109.248 16.0742 109.095 15.6343 108.788 15.341C108.482 15.0344 108.049 14.881 107.49 14.881H105.473V18.5407H107.49Z" fill="#2E2E2E"/>
                            <path d="M36.8722 0.288291C36.669 0.299596 36.5194 0.322207 36.4234 0.356124C36.333 0.39004 36.2709 0.455047 36.2371 0.551144C36.2032 0.647241 36.1862 0.802691 36.1862 1.0175V5.32489C36.1862 5.50578 36.2004 5.63862 36.2286 5.72341C36.2568 5.80255 36.3048 5.85625 36.3726 5.88452C36.446 5.91278 36.5617 5.92691 36.7198 5.92691H37.1348C37.5187 5.92691 37.849 5.7545 38.1257 5.40969C38.408 5.06487 38.5915 4.607 38.6762 4.03607H38.871C38.854 4.22826 38.8456 4.47698 38.8456 4.78223C38.8456 5.32489 38.8653 5.77146 38.9048 6.12193C38.5209 6.10497 37.8744 6.0965 36.9654 6.0965C35.7346 6.0965 34.8142 6.10497 34.2045 6.12193V5.95235C34.3908 5.94105 34.5263 5.91843 34.611 5.88452C34.7013 5.8506 34.7606 5.78559 34.7888 5.6895C34.8227 5.5934 34.8396 5.43795 34.8396 5.22315V1.0175C34.8396 0.802691 34.8227 0.647241 34.7888 0.551144C34.7606 0.455047 34.7013 0.39004 34.611 0.356124C34.5263 0.322207 34.3908 0.299596 34.2045 0.288291V0.118708C34.4924 0.135666 34.9384 0.144145 35.5426 0.144145C36.1185 0.144145 36.5617 0.135666 36.8722 0.118708V0.288291Z" fill="#2E2E2E"/>
                            <path d="M49.6526 0C50.2511 0 50.7734 0.121534 51.2194 0.364603C51.6711 0.607671 52.0212 0.960968 52.2696 1.42449C52.518 1.88237 52.6422 2.43068 52.6422 3.06945C52.6422 3.69125 52.5152 4.24239 52.2611 4.72288C52.0071 5.20336 51.6513 5.57644 51.194 5.84212C50.7423 6.1078 50.2257 6.24064 49.6442 6.24064C49.0457 6.24064 48.5206 6.11911 48.0689 5.87604C47.6229 5.63297 47.2756 5.2825 47.0272 4.82463C46.7788 4.3611 46.6546 3.80996 46.6546 3.1712C46.6546 2.54939 46.7816 1.99825 47.0357 1.51776C47.2897 1.03728 47.6426 0.664199 48.0943 0.39852C48.5516 0.13284 49.0711 0 49.6526 0ZM49.6188 0.152624C49.3082 0.152624 49.0344 0.279811 48.7972 0.534185C48.5601 0.782907 48.3766 1.13338 48.2468 1.5856C48.1225 2.03782 48.0604 2.55505 48.0604 3.13728C48.0604 3.72517 48.131 4.24239 48.2722 4.68896C48.419 5.13553 48.6138 5.48035 48.8565 5.72341C49.105 5.96648 49.3788 6.08802 49.678 6.08802C49.9886 6.08802 50.2624 5.96366 50.4995 5.71493C50.7367 5.46056 50.9174 5.10726 51.0416 4.65504C51.1714 4.20282 51.2364 3.6856 51.2364 3.10336C51.2364 2.51548 51.163 1.99825 51.0162 1.55168C50.875 1.10511 50.6802 0.760296 50.4318 0.517227C50.189 0.274159 49.918 0.152624 49.6188 0.152624Z" fill="#2E2E2E"/>
                            <path d="M65.1373 0.118708C65.0978 0.599192 65.078 1.0288 65.078 1.40754C65.078 1.67322 65.0865 1.88802 65.1035 2.05195H64.9087C64.7957 1.41319 64.6264 0.963795 64.4005 0.703768C64.1747 0.443741 63.8585 0.313728 63.452 0.313728H63.1725C62.9975 0.313728 62.8704 0.32786 62.7914 0.356124C62.7123 0.384388 62.6587 0.440915 62.6305 0.525706C62.6022 0.604845 62.5881 0.734858 62.5881 0.915746V3.05249H62.8845C63.1838 3.05249 63.4096 2.94226 63.5621 2.7218C63.7202 2.50134 63.8303 2.23849 63.8924 1.93324H64.0872C64.0702 2.17066 64.0617 2.43634 64.0617 2.73028V3.13728C64.0617 3.42557 64.0787 3.82692 64.1126 4.34132H63.9178C63.7992 3.59515 63.4548 3.22207 62.8845 3.22207H62.5881V5.17227C62.5881 5.39838 62.6107 5.56514 62.6559 5.67254C62.7067 5.77429 62.7914 5.84212 62.9099 5.87604C63.0342 5.90996 63.229 5.92974 63.4943 5.93539V6.12193C62.7998 6.10497 62.2832 6.0965 61.9445 6.0965C61.6622 6.0965 61.3065 6.10215 60.8773 6.11345L60.6063 6.12193V5.95235C60.7927 5.94105 60.9282 5.91843 61.0129 5.88452C61.1032 5.8506 61.1625 5.78559 61.1907 5.6895C61.2246 5.5934 61.2415 5.43795 61.2415 5.22315V1.0175C61.2415 0.802691 61.2246 0.647241 61.1907 0.551144C61.1625 0.455047 61.1032 0.39004 61.0129 0.356124C60.9282 0.322207 60.7927 0.299596 60.6063 0.288291V0.118708C61.2161 0.135666 62.1364 0.144145 63.3673 0.144145C64.1973 0.144145 64.7873 0.135666 65.1373 0.118708Z" fill="#2E2E2E"/>
                            <path d="M77.6663 0.118708C77.6268 0.65572 77.607 1.1362 77.607 1.56016C77.607 1.82584 77.6155 2.04064 77.6324 2.20457H77.4376C77.3021 1.50929 77.1158 1.02032 76.8787 0.737684C76.6472 0.455047 76.3282 0.313728 75.9217 0.313728H75.7269V5.15531C75.7269 5.39273 75.7495 5.56514 75.7946 5.67254C75.8454 5.77994 75.9301 5.85343 76.0487 5.893C76.1729 5.92691 76.3677 5.9467 76.6331 5.95235V6.12193C75.9217 6.10497 75.3853 6.0965 75.0239 6.0965C74.6682 6.0965 74.1516 6.10497 73.4741 6.12193V5.95235C73.7394 5.9467 73.9314 5.92691 74.05 5.893C74.1742 5.85343 74.2589 5.77994 74.304 5.67254C74.3549 5.56514 74.3803 5.39273 74.3803 5.15531V0.313728H74.194C73.9229 0.313728 73.6914 0.373082 73.4995 0.49179C73.3132 0.610498 73.1522 0.808344 73.0167 1.08533C72.8812 1.35666 72.7655 1.72974 72.6695 2.20457H72.4747C72.4917 2.04064 72.5001 1.82584 72.5001 1.56016C72.5001 1.1362 72.4804 0.65572 72.4408 0.118708C72.9546 0.135666 73.827 0.144145 75.0578 0.144145C76.2887 0.144145 77.1581 0.135666 77.6663 0.118708Z" fill="#2E2E2E"/>
                            <path d="M7.71011 0.0425562H33.2773V1.00246H7.71011V0.0425562Z" fill="#2E2E2E"/>
                            <path d="M3.87503 2.44231H33.2773V3.40221H3.87503V2.44231Z" fill="#2E2E2E"/>
                            <path d="M0.359539 5.00205H33.2773V5.96195H0.359539V5.00205Z" fill="#2E2E2E"/>
                            <path d="M104.866 0.0425562H79.2983V1.00246H104.866V0.0425562Z" fill="#2E2E2E"/>
                            <path d="M112.216 22.1203H0.359539V23.0802H112.216V22.1203Z" fill="#2E2E2E"/>
                            <path d="M108.701 24.0401H3.23585V25H108.701V24.0401Z" fill="#2E2E2E"/>
                            <path d="M108.701 2.44231H79.2983V3.40221H108.701V2.44231Z" fill="#2E2E2E"/>
                            <path d="M112.216 5.00205H79.2983V5.96195H112.216V5.00205Z" fill="#2E2E2E"/>
                        </svg>
                    </Link>

                    <ul className={h.header__list}>
                        <Link href="/" className={h.header__list_item}>Главная</Link>
                        <li className={h.header__list_item}>О нас</li>
                        <li className={h.header__list_item}>Контакты</li>
                    </ul>

                    <label className={h.header__label}>
                        <span className={h.header__label_icon}>
                            <BiSearch size={20}/>
                        </span>
                        <input type="text" className={h.header__label_input} placeholder="Поиск"/>
                    </label>
                    <ul className={h.header__info}>
                        <li className={h.header__info_item}>
                            <HiOutlinePhone size={20}/>
                            8 (964) 89 99 119
                        </li>

                        <li className={h.header__info_item}>
                            <TbTruckDelivery size={20}/>

                            8 (964) 89 99 119
                        </li>
                    </ul>

                    <div className={h.header__icons}>
                        <Link href="/favorites">
                            <FiHeart size={23}/>
                        </Link>
                        <div className={h.header__icons_notify}>
                            <span className={h.header__icons_notify_red}></span>
                            <BsBag size={23}/>
                        </div>
                        <FiUser size={23}/>
                    </div>
                </nav>
                <label className={h.header__label}>
                        <span className={h.header__label_icon}>
                            <BiSearch size={20}/>
                        </span>
                        <input type="text" className={h.header__label_input} placeholder="Поиск"/>
                    </label>
                
            </div>
        </header>
    );
};

export default CardH;