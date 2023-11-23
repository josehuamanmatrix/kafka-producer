import { Kafka } from "kafkajs";
import { readFile } from "fs/promises";
import { v4 as uuid } from "uuid";

async function readEvent(fileName) {
  const file = await readFile(fileName);
  return JSON.parse(file.toString());
}

async function main() {
  const topic = process.argv[2];
  const fileName = process.argv[3];
  const count = process.argv[4] || 1;

  const event = await readEvent(`events/${fileName}.json`);

  const kafka = new Kafka({
    clientId: "kafka-producer",
    brokers: ["localhost:9092"],
  });

  const producer = kafka.producer();

  const messages = Array.from(Array(count), () => ({
    key: uuid(),
    value: JSON.stringify(event),
  }));

  await producer.connect();
  await producer.send({
    topic,
    messages,
  });

  await producer.disconnect();
}

await main();
