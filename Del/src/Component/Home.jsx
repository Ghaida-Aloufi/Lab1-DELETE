import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [img, setImg] = useState([]);
  
    // جلب البيانات من API عند تحميل المكون
    useEffect(() => {
      fetch('https://66ef2b583ed5bb4d0bf2f4ac.mockapi.io/login')
        .then((response) => response.json())
        .then((data) => {
          setImg(data);  
        })
        .catch((error) => console.error("Error fetching data:", error)); // التعامل مع الأخطاء
    }, []);  
    
    // دالة الحذف
    const del = (id) => {
      if (window.confirm("Are you sure about the deletion process?")) {
        fetch(`https://66ef2b583ed5bb4d0bf2f4ac.mockapi.io/login/${id}`, {
          method: 'DELETE',
        })
        .then((response) => {
          if (response.ok) {
            // تحديث حالة الصور بعد الحذف
            setImg((prevImg) => prevImg.filter((item) => item.id !== id));
          } else {
            console.error("Error deleting the item");
          }
        })
        .catch((error) => console.error("Network error:", error)); // التعامل مع الأخطاء
      }
    };
  
    return (
      <div>
        <div className="flex flex-wrap justify-around gap-5">
          {img.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <img src={item.image} alt={`Image ${item.id}`} className="w-full" />

              <div className="flex flex-col">
              <Link to="/Addition" onClick={() => localStorage.setItem("id", item.id)}>
               <button 
            type="button" 
         className="flex justify-center items-center w-full border-2 mt-4" 
         >
               Update
         </button>
              </Link>
              
              <button 
                type="button" 
                className="flex justify-center items-center w-full border-2 mt-4" 
                onClick={() => del(item.id)}
              >
                DELETE
              </button>
  

            </div>
            </div>
          ))}
        </div>
    <div className="w-[100%] flex justify-center items-center ">
         <button 
          type="button" 
          className="bg-[#1c4ed8] mt-10 flex justify-center items-center w-[50%] p-2 text-white"
        >
          <Link to="/Addition" className="text-white">
            Addition
          </Link>
        </button>
      
    </div>
       
      </div>
    );
}
  
export default Home;
