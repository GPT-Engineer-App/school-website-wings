import React from "react";
import { Box, Container, Heading, SimpleGrid, Text, Image, Center, VStack, HStack, Button, useColorModeValue } from "@chakra-ui/react";
import { FaMale, FaFemale, FaChild, FaBaby } from "react-icons/fa";

const WingCard = ({ title, icon, description }) => {
  const bg = useColorModeValue("green.500", "maroon.500");
  return (
    <VStack p={5} spacing={3} boxShadow="md" borderRadius="md" bg={bg} _hover={{ boxShadow: "lg" }}>
      <Box fontSize="3xl" color="white.500">
        {icon}
      </Box>
      <Heading size="md">{title}</Heading>
      <Text textAlign="center">{description}</Text>
      <Button colorScheme="maroon" variant="outline">
        Learn More
      </Button>
    </VStack>
  );
};

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Center mb={14}>
        <Image src="https://via.placeholder.com/150" alt="School Logo" boxSize="100px" mb={4} />
        <VStack spacing={2}>
          <Heading as="h1" size="2xl">
            Welcome to Our School
          </Heading>
          <Text fontSize="lg">A Place for Every Learner</Text>
        </VStack>
      </Center>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
        <WingCard title="Boys Wing" icon={<FaMale />} description="Focused on developing young men with active and creative minds." />
        <WingCard title="Girls Wing" icon={<FaFemale />} description="Empowering young women to pursue their dreams and lead with confidence." />
        <WingCard title="Primary Wing" icon={<FaChild />} description="Nurturing the curiosity and joy of learning in young children." />
        <WingCard title="Kindergarten" icon={<FaBaby />} description="A warm and caring start to your child's educational journey." />
      </SimpleGrid>

      <HStack justifyContent="center" mt={16}>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1613896527026-f195d5c818ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBidWlsZGluZ3xlbnwwfHx8fDE3MDk5OTQ3MDN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="School Building" />
      </HStack>
    </Container>
  );
};

export default Index;
