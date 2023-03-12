import './topbar.css'

export default function TopBar() {
  return (
    <div className='top'>
        <div className='topLeft' >
            <i class="fa-solid fa-seedling"></i>
        </div>
        <div className='topCenter' >
            <ul className='topList'>
            <li className='topListItem'>Trang chủ</li>
            <li className='topListItem'>Giới thiệu</li>
            <li className='topListItem'>Liên hệ</li>
            </ul>
        </div>
        <div className='topRight' >
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
