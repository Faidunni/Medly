import { Button } from "../../components/ui/button.jsx";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "../../components/ui/drawer.jsx";
import { useState } from "react";
import { VStack, Box, useBreakpointValue } from "@chakra-ui/react";

export default function Demo() {
  const [open, setOpen] = useState(false);
  const displayHamburger = useBreakpointValue({ base: "block", md: "none" });

  const navLinks = [
    { name: "Dashboard", href: "/mainpage" },
    { name: "Department", href: "/department" },
    { name: "Patients", href: "#" },
  ];

  return (
    <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <Button variant="outline" size="sm" display={displayHamburger}>
          <RxHamburgerMenu />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle fontWeight={"bold"} fontSize={"2xl"}>
            Medly
          </DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <VStack align="start" spacing={4} listStyleType="none">
            {navLinks.map((link) => (
              <Box
                as="li"
                key={link.name}
                _hover={{
                  bg: "blue.800",
                  color: "white",
                  fontWeight: "semibold",
                }}
                p={2}
                borderRadius="md"
              >
                <a href={link.href}>{link.name}</a>
              </Box>
            ))}
          </VStack>
        </DrawerBody>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
}
