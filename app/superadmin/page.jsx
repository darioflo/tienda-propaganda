'use client'
import AdminApp from "@/admin-components/AdminApp";
import AsyncContext from "@/conetxt/AdminAsyncContext";
import AdminContext from "@/conetxt/AdminContext";

export default function AdminHome() {
    return (
        <section className="admin-page">
            <AdminContext>
                <AsyncContext>
                    <AdminApp />
                </AsyncContext>
            </AdminContext>
        </section>
    )
}