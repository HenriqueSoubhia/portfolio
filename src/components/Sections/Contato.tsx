"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Button from "../Button";
import emailjs from "@emailjs/browser";
import { BeatLoader } from "react-spinners";
import Notification from "../Notification";
import Input from "../Input";

type Props = {};

const Contato = (props: Props) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setmessage] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const [status, setStatus] = useState<"success" | "error" | "">("");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      message,
    };

    if (!name || !email || !message) {
      setStatus("error");
      setTimeout(() => {
        setStatus("");
      }, 3000);
      return;
    }

    setLoading(true);

    await emailjs
      .send("service_ohwwtnu", "template_mmpk2dg", templateParams, {
        publicKey: "VZufU4TkjCtbVTQMJ",
      })
      .then(
        () => {
          setStatus("success");
        },
        (error) => {
          setStatus("error");
        }
      );

    setLoading(false);

    setEmail("");
    setName("");
    setmessage("");

    setTimeout(() => {
      setStatus("");
    }, 3000);
  };

  return (
    <section
      id="contato"
      className="flex justify-center pt-28 pb-40 bg-neutral-700"
    >
      <div className="max-w-6xl px-8 flex flex-col w-full gap-12">
        <h2 className="text-6xl font-bold text-white">Entre em contato</h2>

        <div className="flex gap-24 md:gap-6 flex-col md:flex-row">
          <form
            onSubmit={sendEmail}
            className="flex flex-col flex-1 gap-6 relative"
          >
            <Input placeholder="Nome" setValueFn={setName} value={name} />
            <Input
              placeholder="Email"
              type="email"
              setValueFn={setEmail}
              value={email}
            />
            <Input
              placeholder="Mensagem"
              type="textarea"
              setValueFn={setmessage}
              value={message}
            />

            {loading && (
              <Button
                icon={<BeatLoader size={20} color="white" />}
                className="absolute bottom-[-4rem] w-full right-0"
              />
            )}
            {!loading && (
              <Button
                text="Enviar"
                className="absolute bottom-[-4rem] w-full right-0"
              />
            )}
          </form>

          <ul className="w-96 border-l-2 border-white pl-4 flex flex-col gap-8 justify-center">
            <li className="text-white text-lg ">
              <Link
                className="flex gap-2 items-center"
                href="https://wa.me/5511996250147/?text=textourl"
                target="_blank"
              >
                <FaWhatsapp size={32} />
                <span>+55 11 99625-0147</span>
              </Link>
            </li>
            <li className="text-white text-lg flex gap-2 items-center">
              <IoIosMail size={32} />
              <span>soubhiahenrique0@gmail.com</span>
            </li>
            <li className="text-white text-lg">
              <Link
                className="flex gap-2 items-center"
                target="_blank"
                href="https://www.linkedin.com/in/henrique-soubhia/"
              >
                <FaLinkedin size={32} />
                <span>henrique-soubhia</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {status != "" && <Notification type={status} />}
    </section>
  );
};

export default Contato;
