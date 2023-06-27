
function Addstudent({ setShowModal, isUpdate, functioncall, name, email, phone, enroll, admission, setname, setemail, setphone, setenroll, setadmission, updateuserid }) {

    function validateForm() {

        const pattern = RegExp(
            "^[A-Za-z]+[A-Za-z ]*$"
        );
        const emailval = RegExp(
            "[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
        );
        function validate(text, pattern) {
            return pattern.test(text);
        }

        if (!validate(name, pattern)) {
            alert(' Name is invalid')
            return
        }

        // Check if the Email is an Empty string or not.
        if (!validate(email, emailval)) {
            alert('Email Address is invalid')
            return
        }
        if (phone.length != 10) {
            alert('Phone number is invalid')
            return
        }
        if (enroll === "") {
            alert('Enroll number is invalid')
            return
        }

        return true
    }

    return (

        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto bg-black bg-opacity-75 fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative my-6 mx-auto w-[80%]">
                    {/*header*/}
                    <div className="p-3 w-[80%] bg-white rounded-3xl shadow-md " style={{ width: "500px" }}>
                        <form className="m-4">
                            <div className="mb-2">
                                <label
                                    for="name"
                                    className="block text-sm font-semibold text-gray-800"
                                >
                                    Name
                                </label>
                                <input
                                    type="name"

                                    onChange={e => setname(name = e.target.value)}
                                    placeholder="Enter The Student Name"
                                    className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="mb-2">
                                <label
                                    for="email"
                                    className="block text-sm font-semibold text-gray-800"
                                >
                                    Email
                                </label>
                                <input
                                    type="text"
                                    value={isUpdate ? updateuserid : ""}
                                    disabled={isUpdate}
                                    onChange={e => setemail(email = e.target.value)}
                                    placeholder="Enter The Student Email"
                                    className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div> <div className="mb-2">
                                <label
                                    for="phone"
                                    className="block text-sm font-semibold text-gray-800"
                                >
                                    Phone
                                </label>
                                <input
                                    type="number"

                                    onChange={e => setphone(phone = e.target.value)}
                                    placeholder="Enter The Student Phone Number"
                                    className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div> <div className="mb-2">
                                <label
                                    for="Enrol"
                                    className="block text-sm font-semibold text-gray-800"
                                >
                                    Enroll Number
                                </label>
                                <input
                                    type="text"
                                    onChange={e => setenroll(enroll = e.target.value)}
                                    placeholder="Enter The Student Enroll Number"
                                    className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div> <div className="mb-2">
                                <label
                                    for="Date"
                                    className="block text-sm font-semibold text-gray-800"
                                >
                                    Date Of Admission
                                </label>

                                <input
                                    type="date"
                                    onChange={e => setadmission(admission = e.target.value)}
                                    placeholder="Enter The Date Of Admission "
                                    //value={Date.now}
                                    className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>

                            <div className="mt-6">
                                <button onClick={(e) => {
                                    e.preventDefault()
                                    if (validateForm()) {
                                        functioncall()

                                    }
                                }}
                                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-yellow-500 rounded-md hover:bg-yellow-400 focus:outline-none focus:bg-yellow-600">
                                    {isUpdate ? "Update " : "Add New "} Student
                                </button>
                            </div>
                            <div className="mt-6">
                                <button
                                    className="w-full px-4 py-2 tracking-wide transition-colors duration-200 transform  rounded-md  focus:outline-none focus:bg-yellow-600"
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setShowModal(false)
                                    }}
                                >
                                    Close
                                </button></div>
                        </form>


                    </div>

                </div>
            </div>
        </>


    );
}

export default Addstudent;