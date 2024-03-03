'use client'
import AdminApp from "@/admin-components/AdminApp";
import AdminContext from "@/conetxt/AdminContext";

export default function AdminHome() {
    return (
        <section className="admin-page">
            <AdminContext>
                <AdminApp />
            </AdminContext>
        </section>
    )
}