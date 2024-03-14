import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import FormTask from "./FormTask";

const AddTaskModal = (props) => {
  // Destructuring
  // eslint-disable-next-line react/prop-types
  const { title, usage } = props;

  //   States
  const { isOpen, onOpen, onClose } = useDisclosure();

  //   Handlers
  const handleOpen = () => {
    onOpen();
  };

  return (
    <>
      <Button
        key="blur"
        size="sm"
        color="secondary"
        onPress={() => handleOpen("blur")}
        className="capitalize"
      >
        {/* <p className="text-black font-medium">Add task</p> */}
        {title ? (
          <p className="font-semibold font-sm ">{title}</p>
        ) : (
          <p className="font-semibold font-sm">Add {usage} </p>
        )}
      </Button>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onClose={onClose}
        className="bg-[#141414]"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-white text-2xl justify-center items-center">
                Add task
              </ModalHeader>
              <ModalBody>
                <FormTask onClose={onClose} usage={usage} />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddTaskModal;
