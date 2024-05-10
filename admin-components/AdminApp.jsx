import "@/admin-components/admin-components-styles/AdminApp.css"
import AdminNavbar from "./AdminNavbar"
import MenuLateral from './MenuLateral'
import AdminMain from './AdminMain'

export default function AdminApp() {
    return (
        <section className="admin-app">
            <AdminNavbar superadmin={true} />
            <section className="main">
                <MenuLateral />
                <AdminMain />
            </section>
        </section>
    )
}
