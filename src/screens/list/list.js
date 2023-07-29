import SideNav from "../../component/sidenav";
import Listtile from "../../component/listtile";
import Addstudent from "../../component/addstudent";
import React, { useContext } from "react";
import axios from 'axios';
import { useState, useEffect } from "react";
import { SigninContext } from "../../constants/signinContext";


function List() {
    const ademail = localStorage.getItem("ademail")
    const [allstudent, setallStudent] = useState([]);
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [enroll, setenroll] = useState("");
    const [admission, setadmission] = useState("")
    const [showModal, setShowModal] = React.useState(false);
    const [isUpdate, setisUpdate] = React.useState(false);
    const [val, setval] = React.useState(false);
    const [updatevalue, setupdatevalue] = React.useState({
        name: "", phone: "", enroll: "", admission: ""
    });


    // const remove = () => {

    //     const indx = allstudent.findIndex(findval);

    //     function findval(student) {
    //         return student.email === updateuserid;
    //     }
    //     allstudent.remove(indx)
    // };
    const [updateuserid, setupdateuserid] = React.useState("");

    useEffect(() => {
        axios.get('user/' + ademail)
            .then(response => {
                setallStudent(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [val]);
    const updateStudent = () => {
        axios.put('user/' + updateuserid, {
            "email": updateuserid,
            "name": name,
            "phone": phone,
            "enroll": enroll,
            "createdby": ademail,
            "admission": admission

        }).then(() => {
            setShowModal(false)
            setisUpdate(false)
            setval(!val)
            setname("")
            setemail("")
            setphone("")
            setadmission("")
            setenroll("")
            // remove()
            // if (name !== "") {
            //     setallStudent([...allstudent, {
            //         "userId": updateuserid,
            //         "name": name,
            //         "email": updateuserid,
            //         "phone": phone,
            //         "enroll": enroll,
            //         "admission": admission
            //     }])
            // }

        }

        ).catch(error => {
            console.error(error);
        });

    }
    const createStudent = () => {
        axios.post('user/create', {
            "userid": email,
            "name": name,
            "email": email,
            "phone": phone,
            "enroll": enroll,
            "createdby": ademail,
            "admission": admission

        }).then(() => {

            if (name !== "") {
                setallStudent([...allstudent, {
                    "userid": email,
                    "name": name,
                    "phone": phone,
                    "email": email,
                    "enroll": enroll,
                    "createdby": ademail,
                    "admission": admission
                }])
            }
            setShowModal(false)
            setname("")
            setemail("")
            setphone("")
            setadmission("")
            setenroll("")
        }
        ).catch(error => {
            console.error(error);
        });

    }

    return (
        <body>
            <SideNav selected={"3"} />
            <div class="sm:ml-64 p-1">

                <div class="p-4 border-1 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <div class="grid grid-cols-2 gap-7 mt-1 ml-1 pl-10">
                        <div class="">
                            <h5 className="mx-2 text-lg font-bold pt-2">Student List</h5>
                        </div>
                        <div class="justify-content-left pl-64">
                            <button className="w-50 mr-10 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-yellow-600 rounded-md hover:bg-yellow-400 focus:outline-none focus:bg-yellow-600"
                                onClick={() => {
                                    setisUpdate(false)
                                    setShowModal(true)
                                }}>
                                ADD NEW STUDENT
                            </button>
                        </div>
                    </div>
                    <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                        <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-6 py-4 font-medium text-gray-900 pl-20">Name</th>
                                    <th scope="col" class="px-6 py-4 font-medium text-gray-900">Email</th>
                                    <th scope="col" class="px-6 py-4 font-medium text-gray-900">Phone</th>
                                    <th scope="col" class="px-6 py-4 font-medium text-gray-900">Enroll Number</th>
                                    <th scope="col" class="px-6 py-4 font-medium text-gray-900">Date of Admission</th>
                                    <th scope="col" class="px-6 py-4 font-medium text-gray-900"></th>
                                </tr>
                            </thead>
                            {allstudent.map((student) => {
                                return (
                                    <Listtile setupdateval={setupdatevalue} val={val} setval={setval} create={setallStudent} onupdate={setShowModal} name={student.name} email={student.email} phone={student.phone} enroll={student.enroll} admission={student.admission} userid={student.userid} isUpdate={setisUpdate} updateuser={setupdateuserid} />

                                );
                            })}

                        </table></div></div>
            </div>
            {showModal ? <Addstudent
                setisUpdate={
                    setisUpdate} upval={updatevalue} updateuserid={isUpdate ? updateuserid : ""} name={name} email={email} admission={admission} phone={phone} setadmission={setadmission} setemail={setemail} setphone={setphone} setenroll={setenroll} setname={setname} functioncall={isUpdate ? updateStudent : createStudent} setShowModal={setShowModal} create={setallStudent} allstudent={allstudent} isUpdate={isUpdate} userid={isUpdate ? updateuserid : null} /> : null}
        </body>
    );
}

export default List;