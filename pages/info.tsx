import { Container, Heading, Text, Divider, Box, Icon } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

export default function Info() {
    return (
        <Container maxW="x2" mt={8} px={4} bg="gray.100">
            <Box borderWidth="1px" borderRadius="lg" mb={5}>
                <Box p={6}>
                    <Heading as="h2" mb={4}># INFOhash</Heading>
                    <Text fontSize="xl">MemeHash is a unique project that combines the world of memes and cryptocurrencies. Users can acquire various types of NFTs and stake them to earn Hash tokens as rewards. NFT staking is an exciting adventure that opens up new opportunities for earning and growth in the mining world.</Text>
                </Box>
            </Box>

            <Divider mb={5} />

            <Box borderWidth="1px" borderRadius="lg" mb={5}>
                <Box p={6}>
                    <Heading as="h2" mb={4}>MemeHash Tokenomics</Heading>
                    <Text mb={2}><b>Supply: 10 billion HASH tokens</b></Text>
                    <Text>- Mining in EVM networks 40% = 4 billion</Text>
                    <Text>- Mining in TVM networks 40% = 4 billion</Text>
                    <Text>- Partnerships and Listing 10% = 1 billion</Text>
                    <Text>- Community Development (rewards) 5%</Text>
                    <Text>- Ecosystem Formation (team) 5%</Text>
                </Box>
            </Box>

            <Divider mb={5} />

            <Box borderWidth="1px" borderRadius="lg" mb={5}>
                <Box p={6}>
                    <Heading as="h2" mb={4}>MemeHash Roadmap</Heading>
                    <Text>
                        - <Icon as={MdCheckCircle} color="green.500" /> Idea Development<br />
                        - Token Issuance<br />
                        - Deployment of dApp in EVM<br />
                        - EVM Ecosystem Formation<br />
                        - Launch of quests and tasks<br />
                        - Partner acquisition (listing)<br />
                        - Deployment of dApp in TVM<br />
                        - Expanded integration
                    </Text>
                </Box>
            </Box>

            <Divider mb={5} />

            <Box borderWidth="1px" borderRadius="lg" mb={5}>
                <Box p={6}>
                    <Heading as="h2" mb={4}>Whitepaper/Mechanics #hash</Heading>
                    <Text>- 80% of tokens are allocated for NFT staking, ensuring stability and protection of our ecosystem.</Text>
                    <Text>- 10% are designated as rewards for the community, trading partners, and exchanges, incentivizing their active involvement in the project's development.</Text>
                    <Text>- 5% are earmarked for various quests, tasks, and activities that contribute to the growth and development of our community.</Text>
                    <Text>- The remaining 5% is used to strengthen the ecosystem through liquidity provision, support for external developers, and integration of new solutions for our users.</Text>
                    <Divider mb={5} />
                    <Text mb={4}><b>Participants acquire and stake NFTs to receive #hash tokens as rewards, with mining speed depending on the quantity and characteristics of NFTs. The project provides for 4 types of NFTs:</b></Text>
                    <Text mb={2}>- NFT Place \ 0$ \ serves as an entry</Text>
                    <Text mb={2}>- NFT GPU \ $1 \ available 100 pieces per account</Text>
                    <Text mb={2}>- NFT Asic \ $5 \ available 50 pieces per account</Text>
                    <Text mb={2}>- NFT Farm \ $15 \ available 25 pieces per account</Text>
                    <Text>- Anyone can participate, there are no regional restrictions.</Text>
                    <Text>- To mine #hash tokens, it is necessary to mint NFT premises, minting is one-time per participant account. Cost of NFT 0 USDT + gas.</Text>
                    <Text>- Acquiring NFT GPU and staking, mining speed # 0.042 per hour \ 100 GPU per account available / price $1 each.</Text>
                    <Text>- Acquiring NFT Asic and staking, mining speed # 0.42 per hour \ 50 Asic \ price $5 each.</Text>
                    <Text>- Acquiring NFT Farm and staking, mining speed # 2.42 per hour \ price $15 each.</Text>
                </Box>
            </Box>
        </Container>
    );
}
