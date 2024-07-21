import { useEffect, useState, useRef } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import axios from "axios";
import NavBar from "../components/HomeComponent/NavBar";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import dustbin from "../assets/dustbin.png";
import pencil from "../assets/pencil.png";
import al from "../assets/al.png"
import plus from "../assets/plus.png"
function Application() {
  const [application, setApplication] = useState([]);
  const [company, setCompany] = useState();
  const [jobPostion, setjobPostion] = useState();
  const [location, setLocation] = useState();
  const [link, setLink] = useState();
  const [salary, setSalary] = useState();
  const [operation, setOperation] = useState("add");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [datasave, setDatasave] = useState(false);
  const [applicationId, setApplicationId] = useState("");

  const getAllApllications = () => {
    const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

    axios
      .get(BASE_URL + "/application/readallapplication", {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        setApplication(res.data.data);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllApllications();
    console.log(operation);
    return () => {};
  }, [operation, datasave]);

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleUpdateApplication = (application) => {
    setOperation("update");
    console.log(operation);
    console.log(application)
    setApplicationId(application._id);
    setCompany(application.company);
    setjobPostion(application.jobposition);
    setLink(application.applicationlink);
    setLocation(application.location);
    setSalary(application.salary);

    onOpen();
  };

  const handleClick = () => {
    const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

    console.log("save");
    axios
      .post(
        BASE_URL + "/application/updateapplication",
        {
          _id: applicationId,
          company: company,
          jobposition: jobPostion,
          location: location,
          applicationlink: link,
          salary: salary,
        },
        {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setDatasave(false);
        onClose();
        setOperation("add");
        // window.location.reload();
      });
  };

  const handleAddApplication = () => {
    console.log("Add applicagtion");
    if (!company || !jobPostion) {
      alert("Please enter company and job position");
    }
    const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

    axios
      .post(
        BASE_URL + "/application/createapplication",
        {
          company,
          jobposition: jobPostion,
          location,
          applicationlink: link,
          salary,
        },
        {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        window.location.reload();
      });
  };

  const deleteRow = (id) => {
    const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;
    console.log("delete");

    axios
      .post(
        BASE_URL + "/application/removeapplication",
        {
          _id: id,
        },
        {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        window.location.reload();
      });
  };

  const updateStatus = (id, description) => {
    const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;
    console.log("status");

    axios
      .post(
        BASE_URL + "/application/updatestatus",
        {
          _id: id,
          description,
        },
        {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        window.location.reload();
      });
  };

  return (
    <>
      <div className="bg-gradient-to-br from-gray-200 via-gray-100 via-50%  to-gray-200 text-white h-fit ">
        <NavBar />
        <div className="m-auto">
          <div className="m-auto px-20 pt-10 flex flex-row-reverse max-sm:pt- max-sm:px-10">
            <Button
              onClick={onOpen}
              fontFamily="Montserrat"
              borderRadius="4px"
              border="1px"
              borderColor="black"
              fontSize={{ base: '12px', xl:"14px"}}
              px={{base:"15px",xl:"20px"}}
              py={{base:"10px",xl:"14px"}}
              height="fit"
              width="fit"
              operation="add"
              textColor="black"
            >
              <img src={plus} alt="" className="w-4 h-4"  />
              <p className="pl-2 max-sm:hidden ">Add New Application</p> 
            </Button>
          </div>
        </div>

        <div className="container mx-auto py-4">
          <div className="overflow-x-auto ">
            <TableContainer bgColor="transperent" fontFamily="Montserrat" border="1px" borderRadius="6px" margin={{base:"12px"}}>
              <Table variant="simple" >
                <Thead>
                  <Tr
                    borderBottom="2px"
                    padding={{base:"1px",lg:"2px"}}
                  >
                    <Th color="black" textAlign="center" fontSize={{base:"small",lg:"medium"}} fontFamily="Montserrat" paddingY={{base:"14px",lg:"18px"}}>
                      Company
                    </Th>
                    <Th color="black" textAlign="center" fontSize={{base:"small",lg:"medium"}} fontFamily="Montserrat" paddingY={{base:"14px",lg:"18px"}}>
                      Job Position
                    </Th>
                    <Th color="black" textAlign="center" fontSize={{base:"small",lg:"medium"}} fontFamily="Montserrat" paddingY={{base:"14px",lg:"18px"}}>
                      Location
                    </Th>
                    <Th color="black" textAlign="center" fontSize={{base:"small",lg:"medium"}} fontFamily="Montserrat" paddingY={{base:"14px",lg:"18px"}}>
                      Link
                    </Th>

                    <Th color="black" textAlign="center" fontSize={{base:"small",lg:"medium"}} fontFamily="Montserrat" paddingY={{base:"14px",lg:"18px"}}>
                      Salary
                    </Th>
                    <Th color="black" textAlign="center" fontSize={{base:"small",lg:"medium"}} fontFamily="Montserrat" paddingY={{base:"14px",lg:"18px"}}>
                      Date
                    </Th>
                    <Th color="black" textAlign="center" fontSize={{base:"small",lg:"medium"}} fontFamily="Montserrat" paddingY={{base:"14px",lg:"18px"}}>
                      Status
                    </Th>
                    <Th color="black" textAlign="center" fontSize={{base:"small",lg:"medium"}} fontFamily="Montserrat" paddingY={{base:"14px",lg:"18px"}}>
                      Update
                    </Th>
                    <Th color="black" textAlign="center" fontSize={{base:"small",lg:"medium"}} fontFamily="Montserrat" paddingY={{base:"14px",lg:"18px"}}>
                      Delete
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {application.map((application) => (
                    <Tr key={application._id}  textColor="black" fontSize={{base:"small",lg:"medium"}}>
                      <Td textAlign="center">{application.company}</Td>
                      <Td textAlign="center">{application.jobposition}</Td>
                      <Td textAlign="center">
                        {application.location ? application.location : "Remote"}
                      </Td>
                      <Td textAlign="center">
                        <Link to={application.applicationlink} target="_blank">
                          <img src={al} className="w-8 h-6 max-sm:w-6 max-sm:h-4 flex items-center justify-center pl-2"/>
                        </Link>
                      </Td>

                      <Td textAlign="center">{application.salary}</Td>
                      <Td textAlign="center">{formatDate(application.date)}</Td>
                      <Td textAlign="center">
                        <Select
                          placeholder="Select option"
                          defaultValue={application.description}
                          onChange={(e) => {
                            updateStatus(application._id, e.target.value);
                          }}
                          color={application.description=="Applied"?"orange" : application.description=="Interviewed" ? "#63b3ed" : application.description=="Pending"?"red" :"green"}
                          fontSize={{base:"small",lg:"medium"}}
                        >
                          <option value="Applied" >Applied</option>
                          <option value="Interviewed" >Interviewed </option>
                          <option value="Pending" >Pending </option>
                          <option value="Completed" >Completed </option>
                        </Select>
                      </Td>
                      <Td className="flex justify-center items-center">
                          <img src={pencil} className="h-6 my-2  cursor-pointer" onClick={() => handleUpdateApplication(application)}/>
                      </Td>
                      <Td>
                        <button
                          className="flex justify-center items-center align-middle p-auto"
                          onClick={() => deleteRow(application._id)}
                        >
                          <img
                            src={dustbin}
                            alt="delete"
                            className="w-[42px] h-[26px] max-sm:w-[38px] max-sm:h-[22px] pl-5 pr-0 flex justify-center items-center "
                          />
                        </button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>

            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>
                  {operation == "add"
                    ? "Add Application"
                    : "Update Application"}
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>Company</FormLabel>
                    <Input
                      onChange={(e) => {
                        setCompany(e.target.value);
                      }}
                      placeholder="Company"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Job Position</FormLabel>
                    <Input
                      onChange={(e) => {
                        setjobPostion(e.target.value);
                      }}
                      placeholder="Job Postion"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Location</FormLabel>
                    <Input
                      onChange={(e) => {
                        setLocation(e.target.value);
                      }}
                      placeholder="Location"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Application Link</FormLabel>
                    <Input
                      onChange={(e) => {
                        setLink(e.target.value);
                      }}
                      placeholder="Link"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Salary</FormLabel>
                    <Input
                      onChange={(e) => {
                        setSalary(e.target.value);
                      }}
                      placeholder="Salary"
                    />
                  </FormControl>
                </ModalBody>

                <ModalFooter>
                  <Button
                    onClick={
                      () =>
                        operation == "add"
                          ? handleAddApplication()
                          : handleClick()
                    }
                    colorScheme="blue"
                    mr={3}
                  >
                    Save
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

export default Application;
