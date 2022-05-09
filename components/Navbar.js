import { Box, Button, ButtonGroup, Flex, Heading } from "@chakra-ui/react";
import NavLink from "next/link";
import { useRouter } from "next/router";

const Navbar = ({ onOpen }) => {
  const router = useRouter();

  return (
    <Box height="100%" p="5" bg="gray.100">
      <Box maxW="6xl" mx="auto">
        <Flex
          as="nav"
          aria-label="Site navigation"
          align="center"
          justify="space-between"
        >
          <NavLink href="/">
            <Heading mr="4" color="gray.400" as="button">
              TodoApp
            </Heading>
          </NavLink>
          <Box>
            <ButtonGroup spacing="4" ml="6">
              {router.pathname === "/" && (
                <Button colorScheme="blue" onClick={onOpen}>
                  Add Todo
                </Button>
              )}
            </ButtonGroup>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;
