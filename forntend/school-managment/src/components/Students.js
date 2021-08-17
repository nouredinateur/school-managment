import StudentList from './StudentList';



 
function Student(){
    return(
        <div  class="w-auto h-screen bg-coolgrey  text-white-400">
            <div class="p-8">
                <div class="h-16 w-1/4 mx-40 bg-white flex items-center rounded-full shadow">
                    <input class="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search">
                    </input>
                    <div class="p-4">
                        <button class=" bg-purple text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-10 h-10 flex items-center justify-center">
                        <i class="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div >
            <StudentList />
            </div>
        </div>

        
    )
}

export default Student;