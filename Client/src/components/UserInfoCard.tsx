import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";

export default function UserInfoCard() {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className="max-w-[100%] justify-center">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="https://media.istockphoto.com/id/1150528651/photo/successful-it-developer.jpg?s=612x612&w=0&k=20&c=C5z2iTLEdxdR8vvK4KO7rnn5FLUDLr_TRYXaf5xE-60="
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              Alberto Sierra
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              @chefBeto
            </h5>
          </div>
        </div>
        <Button
          className={
            isFollowed
              ? "bg-transparent text-foreground border-default-200"
              : ""
          }
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          Front-end Chef. Cooking up code.
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, ipsa
          corporis consequuntur officia adipisci suscipit architecto molestias
          veniam illo doloremque quas velit? Labore ea ad dolor incidunt iste,
          soluta aspernatur?
        </p>
        <span className="pt-2">
          #FrontendWithAlberto
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">8.0B</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
  );
}