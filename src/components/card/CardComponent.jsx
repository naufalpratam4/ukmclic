import {
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
function CardComponent(props) {
  return (
    <>
      <div className="mt-6 xl:w-80 md:w-60 w-96 border shadow-lg rounded-lg">
        <div floated={false} className="h-80 p-4 mb-9 ">
          <img
            src="https://picsum.photos/900"
            alt="profile-picture"
            className="rounded-lg"
          />
        </div>
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="mb-1">
            {props.divisi}
          </Typography>
          <Typography>{props.deskripsi}</Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <a href="#" className="inline-block">
            <Button
              size="sm"
              variant="text"
              className="flex items-center gap-2"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardFooter>
      </div>
    </>
  );
}

export default CardComponent;
