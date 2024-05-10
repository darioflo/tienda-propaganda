'use client'
import AdminApp from "@/admin-components/AdminApp";
import AdminAppStore from "@/admin-components/AdminAppStore";
import AsyncContext from "@/conetxt/AdminAsyncContext";
import AdminContext from "@/conetxt/AdminContext";

export default function AdminStore() {
    return (
        <section className="admin-page">
            <AdminContext>
                <AsyncContext>
                    <AdminAppStore />
                </AsyncContext>
            </AdminContext>
        </section>
    )
}
