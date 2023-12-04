import { GridViewRounded, Person2Rounded, AdminPanelSettingsRounded, BookOnlineRounded, LocalActivityRounded, ChatRounded, AccountBalanceRounded } from "@mui/icons-material"

const sidebar = [
    {
        link: '/',
        section: 'home',
        icon: <GridViewRounded />,
        text: 'Thống kê'
    },
    {
        link: '/users',
        section: 'users',
        icon: <Person2Rounded />,
        text: 'Người dùng'
    },
    {
        link: '/booking',
        section: 'booking',
        icon: <BookOnlineRounded />,
        text: 'Quản lý đặt vé'
    },
    {
        link: '/tickets',
        section: 'tickets',
        icon: <LocalActivityRounded />,
        text: 'Vé'
    },
    {
        link: '/reviews',
        section: 'reviews',
        icon: <ChatRounded />,
        text: 'Đánh giá'
    },
    {
        link: '/admin',
        section: 'admin',
        icon: <AdminPanelSettingsRounded />,
        text: 'Quản trị viên'
    },
    {
        link: '/construction',
        section: 'construction',
        icon: <AccountBalanceRounded />,
        text: 'Công trình'
    }
]

export default sidebar
