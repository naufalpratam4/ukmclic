import React from "react";
import { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

function LoginPage() {
  const [input, setInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => setInput(e.target.value);
  const handleSubmit = () => setIsSubmitted(true);

  const isError = isSubmitted && input === "";

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-2 w-1/2 p-4">
        {/* email */}
        <div className="font-bold text-2xl pb-2">Login</div>
        <div>
          <FormControl isInvalid={isError}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={input}
              onChange={handleInputChange}
              className="w-full border-2 rounded-md ps-2 py-1"
            />
            {!isError ? (
              <FormHelperText></FormHelperText>
            ) : (
              <FormErrorMessage className="text-red-500">
                Email is required.
              </FormErrorMessage>
            )}
          </FormControl>
        </div>

        {/* password */}
        <div className="pt-2">
          <FormControl isInvalid={isError}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={input}
              onChange={handleInputChange}
              className="w-full border-2 rounded-md ps-2 py-1"
            />
            {!isError ? (
              <FormHelperText></FormHelperText>
            ) : (
              <FormErrorMessage className="text-red-500">
                Email is required.
              </FormErrorMessage>
            )}
          </FormControl>
        </div>

        <div className="flex py-2 justify-center">
          <button
            type="button"
            onClick={handleSubmit}
            className="py-2 px-9 rounded-md bg-orange-500 hover:bg-orange-700 ease-in-out duration-150 text-white"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
