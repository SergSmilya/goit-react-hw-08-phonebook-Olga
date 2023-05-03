import { useFormik } from 'formik';
import * as yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../../Redux/Contacts/ContactsOperations';
import { viewContacts } from 'Redux/Contacts/ContactsSelectors';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';

export default function InputForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(viewContacts);

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    onSubmit(values) {
      if (checkName(values.name)) {
        return alert(`${values.name} is already in contacts`);
      }
      dispatch(addContacts(values));
    },

    validationSchema: yup.object({
      name: yup.string().required(),
      number: yup.number().min(8).required(),
    }),
  });

  function checkName(name) {
    return contacts.find(ob => name === ob.name);
  }

  return (
    <Flex bg="gray.100" align="center" justify="center" h="50vh">
      <Box bg="white" p={6} rounded="md">
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                name="name"
                type="text"
                variant="filled"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="number">Number</FormLabel>
              <Input
                id="number"
                name="number"
                type="tel"
                variant="filled"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </FormControl>

            <Button type="submit" colorScheme="purple" width="full">
              Add contact
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}
