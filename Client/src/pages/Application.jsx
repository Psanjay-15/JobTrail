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
function Application() {
  const [applications, setApplication] = useState([]);
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
        console.log(res);
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

  const updateApplication = (id) => {
    console.log(id);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const [company, setCompany] = useState();
  const [jobPostion, setjobPostion] = useState();
  const [location, setLocation] = useState();
  const [link, setLink] = useState();
  const [salary, setSalary] = useState();

  const handleAddApplication = () => {
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
      });
  };

  return (
    <>
      <div className="bg-gradient-to-br from-gray-950   via-gray-800 via-50%  to-gray-950 text-white h-screen ">
        <NavBar />
        <div className="container mx-auto py-8">
          <div className="overflow-x-auto ">
            <TableContainer bgColor="transparent">
              <Table variant="simple">
                <Thead>
                  <Tr backgroundColor="Highlight">
                    <Th
                      color="white"
                      textAlign="center"
                      justifyContent="center"
                      fontSize="medium"
                    >
                      Company
                    </Th>
                    <Th color="white" textAlign="center" fontSize="medium">
                      Job Position
                    </Th>
                    <Th color="white" textAlign="center" fontSize="medium">
                      Location
                    </Th>
                    <Th color="white" textAlign="center" fontSize="medium">
                      Application Link
                    </Th>
                    <Th color="white" textAlign="center" fontSize="medium">
                      Description
                    </Th>
                    <Th color="white" textAlign="center" fontSize="medium">
                      Salary
                    </Th>
                    <Th color="white" textAlign="center" fontSize="medium">
                      Date
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {applications.map((application) => (
                    <Tr key={application._id}>
                      <Td textAlign="center">{application.jobposition}</Td>
                      <Td fontSize="medium" textAlign="center">
                        {application.company}
                      </Td>
                      <Td fontSize="medium" textAlign="center">
                        {application.location}
                      </Td>
                      <Td fontSize="medium" textAlign="center">
                        {" "}
                        <Link to={application.applicationlink} target="_blank">
                          Link
                        </Link>
                      </Td>
                      <Td fontSize="medium" textAlign="center">
                        {application.description}
                      </Td>
                      <Td fontSize="medium" textAlign="center">
                        {application.salary}
                      </Td>
                      <Td fontSize="medium" textAlign="center">
                        {formatDate(application.date)}
                      </Td>
                      <Td>
                        <Button
                          onClick={() => {
                            updateApplication(application._id);
                          }}
                        >
                          Update
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </div>
        </div>

        <Button onClick={onOpen}>Open Modal</Button>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
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
              <Button onClick={handleAddApplication} colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}

export default Application;
