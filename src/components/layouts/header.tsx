import styles from '@/styles/Header.module.scss'
import Carousel from 'react-material-ui-carousel'

export default function Header() {
    return (
        <nav className={styles['nav-bar']}>
            <div className={`${styles['nav-bar-info']}`}>
                <div className={styles['nav-info-container']}>
                    <span style={{color: '#ffffff'}}>
                        Trụ sở chính (Hà Nội) &nbsp;
                        <span style={{color: 'red'}}>
                            266 Đôi Cấn, Hà Nội
                        </span>
                    </span>
                    <span style={{color: '#ffffff'}}>
                        Hệ thống cửa hàng
                    </span>
                </div>
            </div> 
            <div className={`${styles['navbar-banner']}`}>
                <div className={styles['banner-content']}>
                    <div className={styles['left-img']}>
                        <img src="https://1.bp.blogspot.com/-7KzjUNF1NUI/Xv3sxd_roSI/AAAAAAAANpE/KfVmZP9GQ6oYWaa4O-_k-zWrOolzoNeogCLcBGAsYHQ/s1600/logo.png" alt="left_img_banner" />
                    </div>
                    <div className={styles['info-contact']}>
                        <span style={{fontSize: '16px', fontWeight: 'bold'}}>
                            Cho thuê xe máy oto 4-7-9 chỗ
                        </span>
                        <span style={{color: 'red', fontSize: '18px', fontWeight: 'bold'}}>
                            1800 6750 - 1900 116750
                        </span>
                    </div>
                    <div className={styles['right-img']}>
                        <img src="https://1.bp.blogspot.com/-NHf4WjOqEpU/Xv79IgV-2XI/AAAAAAAANsk/rlr2g4_NzZkotJai5aD0wXSO8NvcahAjQCLcBGAsYHQ/s1600/head-banner.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className={styles['navbar-menu-pc']}>

            </div>
        </nav>
    )
}