import React, { forwardRef, useEffect } from 'react';
import { useFormik } from 'formik';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import * as Yup from 'yup';
import FullScreenSection from './FullScreenSection';

const LandingSection = forwardRef((props, ref) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      date: '',
      time: '',
    },

    onSubmit: () => {},
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      email: Yup.string().email('Must be a valid email').required('Required'),
      type: Yup.string().optional(),
      comment: Yup.string()
        .min(25, 'Must be at least 25 characters')
        .required('Required'),
    }),
  });

  return (
    <FullScreenSection isDarkBackground py={16} color="black" spacing={8}>
      <Heading as="h1" id="contactme-section">
        Contact me
      </Heading>
      <Box p={6} rounded="md" w="100%">
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4}>
            <FormControl
              isInvalid={formik.errors.firstName && formik.touched.firstName}
            >
              <FormLabel textAlign="center" htmlFor="firstName">
                Name
              </FormLabel>
              <Input
                id="firstName"
                name="firstName"
                width={400}
                onChange={formik.handleChange}
                value={formik.values.firstName}
                onBlur={formik.handleBlur}
              />
              <FormErrorMessage color="red">
                {formik.errors.firstName}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={formik.errors.email && formik.touched.email}
            >
              <FormLabel textAlign="center" htmlFor="email">
                Email Address
              </FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                width={400}
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              <FormErrorMessage color="red">
                {formik.errors.email}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.date && formik.touched.date}>
              <FormLabel textAlign="center" htmlFor="type">
                Type of enquiry
              </FormLabel>
              <Input
                id="date"
                name="date"
                type="date"
                onChange={formik.handleChange}
                value={formik.values.date}
                onBlur={formik.handleBlur}
              />
              <FormErrorMessage color="red">
                {formik.errors.date}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.time && formik.touched.time}>
              <FormLabel textAlign="center" htmlFor="time">
                Your message
              </FormLabel>
              <Input
                id="time"
                name="time"
                type="time"
                onChange={formik.handleChange}
                value={formik.values.time}
                onBlur={formik.handleBlur}
              />
              <FormErrorMessage color="red">
                {formik.errors.time}
              </FormErrorMessage>
            </FormControl>
            <Button
              type="submit"
              colorScheme="purple"
              width="100%"
              py={20}
              background="#f4ce14"
              fontSize="1rem"
            >
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </FullScreenSection>
  );
});
export default LandingSection;
