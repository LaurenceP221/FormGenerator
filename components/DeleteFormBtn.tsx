"use client";
import React, { SetStateAction, useState } from "react";
import { Button } from "./ui/button";
import { MdDeleteForever, MdOutlineWarning } from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "./ui/dialog";
import { DeleteForm } from "@/actions/form";
import { toast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

function DeleteFormBtn({ id }: { id: number }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const router = useRouter();
  const handleDeleteButtonClick = () => {
    try {
      DeleteForm(id);
      toast({
        title: "Success",
        description: "Form deleted successfully",
      });

      router.push("/");
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong, please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog
     /*  open={open} */
      /* onClose={handleClose} */
    >
      <DialogTrigger asChild>
        <Button
          variant={"destructive"}
          className="h-[30px] w-[150px]"
        >
          <MdDeleteForever className="mr-2 h-4 w-4" />
          Delete Form
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex">
            <MdOutlineWarning />
            Confirm Form Deletion
            <MdOutlineWarning />
          </DialogTitle>
          <DialogDescription>
            Are you sure you want to PERMANENTLY DELETE this form and ALL of its
            submissions?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            className="w-full mt-4"
            onClick={handleDeleteButtonClick}
          >
            <MdDeleteForever className="mr-2 h-4 w-4" />
            Delete
          </Button>
          <DialogClose/>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteFormBtn;
