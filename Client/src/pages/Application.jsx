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

import { Link } from "react-router-dom";
import dustbin from "../assets/dustbin.png";

function Application() {
  const [application, setApplication] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [company, setCompany] = useState();
  const [jobPostion, setjobPostion] = useState();
  const [location, setLocation] = useState();
  const [link, setLink] = useState();
  const [salary, setSalary] = useState();
  const [operation, setOperation] = useState("add");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

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
    return () => {};
  }, []);

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleUpdateApplication = (application) => {
    const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;
    setOperation("update");
    onOpen();
    axios
      .post(
        BASE_URL + "/application/updateapplication",
        {
          _id: application._id,
          company: company ? company : application.company,
          jobposition: jobPostion ? jobPostion : application.jobposition,
          location: location ? location : application.location,
          applicationlink: link ? link : application.applicationlink,
          salary: salary ? salary : application.salary,
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
        // onClose();
        // setOperation("add");
      });
  };

  const handleAddApplication = () => {
    if (!company || !jobPostion) {
      alert("Please enter company and job position");
    }
    const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;
    setOperation("add");
    onOpen();

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
      .finally(() => onClose());
  };

  const handleSort = () => {
    const sortedApplications = [...applications].sort((a, b) => {
      const salaryA = parseFloat(a.salary) || 0;
      const salaryB = parseFloat(b.salary) || 0;
      if (sortOrder === "asc") {
        return salaryA - salaryB;
      } else {
        return salaryB - salaryA;
      }
    });
    setApplication(sortedApplications);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const deleteRow = (application) => {
    const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

    axios
      .post(
        BASE_URL + "/application/removeapplication",
        {
          _id: application._id,
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
      });
  };

  return (
    <>
      <div className="bg-gradient-to-br from-gray-950 via-gray-800 via-50%  to-gray-950 text-white h-screen ">
        <NavBar />
        <div className="m-auto">
          <div className="m-auto px-20 pt-10 flex flex-row">
            <Button
              onClick={onOpen}
              fontFamily="Montserrat"
              borderRadius="35px"
              fontSize="14px"
              px="20px"
              py="0px"
              height="30px"
              width="100px"
              operation="add"
            >
              ADD
            </Button>
          </div>
        </div>

        <div className="container mx-auto py-4">
          <div className="overflow-x-auto ">
            <TableContainer bgColor="transperent" fontFamily="Montserrat">
              <Table variant="simple">
                <Thead>
                  <Tr
                    backgroundColor="Highlight"
                    fontFamily="Montserrat"
                    fontSize="small"
                  >
                    <Th color="white" textAlign="center">
                      Company
                    </Th>
                    <Th color="white" textAlign="center">
                      Job Position
                    </Th>
                    <Th color="white" textAlign="center">
                      Location
                    </Th>
                    <Th color="white" textAlign="center">
                      Application Link
                    </Th>
                    <Th color="white" textAlign="center">
                      Status
                    </Th>
                    <Th
                      color="white"
                      textAlign="center"
                      onClick={handleSort}
                      cursor="pointer"
                      defaultValue={sortOrder === "desc"}
                    >
                      Salary {sortOrder === "asc" ? "▲" : "▼"}
                    </Th>
                    <Th color="white" textAlign="center">
                      Date
                    </Th>
                    <Th color="white" textAlign="center">
                      Update
                    </Th>
                    <Th color="white" textAlign="center">
                      Delete
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {application.map((application) => (
                    <Tr key={application._id} fontSize="medium">
                      <Td textAlign="center">{application.jobposition}</Td>
                      <Td textAlign="center">{application.company}</Td>
                      <Td textAlign="center">
                        {application.location ? application.location : "Remote"}
                      </Td>
                      <Td textAlign="center">
                        <Link to={application.applicationlink} target="_blank">
                          Link
                        </Link>
                      </Td>
                      <Td textAlign="center">
                        {application.description
                          ? application.description
                          : "Applied"}
                      </Td>

                      <Td textAlign="center">{application.salary}</Td>
                      <Td textAlign="center">{formatDate(application.date)}</Td>
                      <Td>
                        <Button
                          onClick={() => handleUpdateApplication(application)}
                          fontFamily="Montserrat"
                          borderRadius="35px"
                          fontSize="14px"
                          px="20px"
                          py="0px"
                          height="30px"
                          width="100px"
                        >
                          Update
                        </Button>
                      </Td>
                      <Td>
                        <button
                          className="flex justify-center items-center align-middle"
                          onClick={() => deleteRow(application)}
                        >
                          <img
                            src={dustbin}
                            alt="delete"
                            className="w-6 h-6 flex justify-center items-center align-middle"
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
                  {operation === "add"
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
                    onClick={() => handleAddApplication()}
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
