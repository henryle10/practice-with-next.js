import { useForm } from 'react-hook-form';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Button,
    Input,
    useToast,
    useDisclosure,
    toast
} from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';
import { createSite } from '@/lib/db';
import { useRef } from 'react';

const AddSiteModal = ({ children }) => {
    const initialRef = useRef();
    const auth = useAuth();
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { handleSubmit, register } = useForm();

    const onCreateSite = ({ site, url }) => {
        createSite({
            authorId: auth.user.uid,
            createdAt: new Date().toISOString(),
            site,
            url
        });
        toast({
            title: 'Success!',
            description: "We've added your site.",
            status: 'success',
            duration: 5000,
            isClosable: true
        });
        onClose();
    }

    return (
        <>
            <Button
                id="add-site-modal-button"
                onClick={onOpen}
                backgroundColor="gray.900"
                color="white"
                fontWeight="medium"
                _hover={{ bg: 'gray.700' }}
                _active={{
                    bg: 'gray.800',
                    transform: 'scale(0.95)'
                }}
            >
                Add Your first site
            </Button>
            <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
                    <ModalHeader fontWeight="bold">Add Site</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input
                                id="site-input"
                                placeholder="My site"
                                name="site"
                            // ref={register({
                            //     required: 'Required'
                            // })}
                            />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Link</FormLabel>
                            <Input
                                id="link-input"
                                placeholder="https://website.com"
                                name="url"
                            // ref={register({
                            //     required: 'Required'
                            // })}
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={onClose} mr={3} fontWeight="medium">
                            Cancel
                        </Button>
                        <Button
                            id="create-site-button"
                            backgroundColor="#99FFFE"
                            color="#194D4C"
                            fontWeight="medium"
                            type="submit"
                        >
                            Create
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default AddSiteModal;