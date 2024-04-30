import React from 'react';
import { Flex, Link } from "@chakra-ui/react";
import { FaTwitter, FaDiscord, FaTelegram, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
            backgroundColor: "#01111f",
            color: "#ffffff",
        }}>
            <div>
                <p>@LookHook DEV </p>
            </div>
            <div>
                {/* Ссылки на социальные сети */}
                <Flex justifyContent="center" alignItems="center">
                    <Link href={"https://twitter.com/ChainsInsider"} mx={2}>
                        <FaTwitter size={24} color="#ffffff" />
                    </Link>
                    <Link href={"https://discord.gg"} mx={2}>
                        <FaDiscord size={24} color="#ffffff" />
                    </Link>
                    <Link href={"https://t.me/ChainInsider"} mx={2}>
                        <FaTelegram size={24} color="#ffffff" />
                    </Link>
                    <Link href={"https://github.com/ваш_аккаунт"} mx={2}>
                        <FaGithub size={24} color="#ffffff" />
                    </Link>
                </Flex>
            </div>
            <div>
                <a href="https://thirdweb.com" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
                    Using ThirdWeb
                </a>
            </div>
        </div>
    );
};

export default Footer;
