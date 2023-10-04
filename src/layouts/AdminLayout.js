import { useEffect } from 'react';
import Footer from "../components/admin/Footer"
import Navbar from "../components/admin/Navbar"
import Sidebar from "../components/admin/Sidebar"
export default function AdminLayout({children}){
    useEffect(() => {
        // Add a class to the <body> tag
        document.body.classList.add('sidebar-mini');
        // Cleanup function to remove the class when the component unmounts
        return () => {
          document.body.classList.remove('sidebar-mini');
        };
      }, []);
    
    return(
        <div className="wrapper">
            <Navbar />
            <Sidebar />
            {children}
            <aside className="control-sidebar control-sidebar-dark">
                <div className="p-3">
                <h5>Title</h5>
                <p>Sidebar content</p>
                </div>
            </aside>
            <Footer />
        </div>
    )
}