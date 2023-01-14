import Navbar from "../components/Navbar";


export const getServerSideProps = async () => {
  const request = await fetch("http://localhost:8001/detect",{
    method: 'POST',
    body: JSON.stringify({
      image: 'C:/Users/Lenovo/Desktop/cafe5.jpeg'
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const res = await request.json();
  let count = res.content.number_of_people;
  const density = Math.round((count*100)/50)
  return { props: { density } };
};

function Validate({ density }) {
  
  return (
    <div>
      <Navbar className="fixed z-100" />
      <div className="min-h-screen py-20 ">
        <div className="container mx-auto my-2">
          <div className="flex flex-col max-w  mx-auto overflow-hidden shadow-lg lg:flex-row lg:w-/12 bg-gray rounded-xl">
            <div className="max-w flex  items-center justify-center w-full px-12 py-16 bg-orange-400 lg:w-1/2 bg-gradient-to-l" >
            <h1>Cafe Yoğunluğu:</h1>
            <h1>{density}% </h1>
              <div action="#" >
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 

export default Validate;
