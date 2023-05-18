"use client";

import Image from "next/image";
import Link from "next/link";
import { PurpleText } from "./theme/themedComponents";
import styled from "styled-components";
export default function Test() {
  const WelcomeContainer = styled.div`
    height: calc(100vh - 80px);
    margin-left: 70px;
    margin-top: 450px;
  `;

  return (
    <main>
      <section>
        <WelcomeContainer className="md:w-3/5">
          <small>Hello! {"I’m "}Yunze (Fred)!</small>
          <div style={{ fontSize: "42px" }}>
            A{" "}
            <PurpleText fontSize="42px" fontWeight={500}>
              Software & Hardware Engineer
            </PurpleText>{" "}
            extraordinaire casting magic to solve problems.
          </div>
        </WelcomeContainer>
        <div className="md:w-3/8">image place holder</div>
      </section>
    </main>
  );
}
