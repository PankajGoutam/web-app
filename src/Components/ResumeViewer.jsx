import { ActionIcon, Modal, ScrollArea, Tooltip, useMatches } from "@mantine/core";
import { IconArrowBigDownLineFilled } from "@tabler/icons-react";
import { Document, Page } from "react-pdf";
import { Info } from "../User";

const ResumeViewer = (props: any) => {
    const btn = useMatches({
        xs: 'xs',
        sm: 'sm',
        md: 'md',
    });

    // Path to the Resume PDF file in the public folder
    const resumePath = process.env.PUBLIC_URL + '/amardeep_resume.pdf';

    return (
        <Modal.Root scrollAreaComponent={ScrollArea.Autosize} size="auto" centered className="font-mono" opened={props.opened} onClose={props.close}>
            <Modal.Overlay className="!backdrop-opacity-85 blur-sm" />
            <Modal.Content className="!rounded-3xl">
                <Modal.Header className="!bg-bgColor xs-mx:!p-2 !border-primaryColor xs-mx:!border  !border-2 xs-mx:!border-b-0 !border-b-0 !rounded-tl-3xl !rounded-tr-3xl">
                    <Modal.Title data-autofocus className="!text-4xl xs-mx:!text-2xl text-white flex gap-3 items-center !font-bold">
                        Resume
                        <Tooltip label="Download" className="!text-bgColor" color="#C084FC" position="right" offset={5}>
                            <ActionIcon className="!text-primaryColor" component="a" href={resumePath} size={btn} download={Info.name} variant="outline" color="#C084FC">
                                <IconArrowBigDownLineFilled className=" xs-mx:!w-[16px] xs-mx:!h-" />
                            </ActionIcon>
                        </Tooltip>
                    </Modal.Title>
                    <Modal.CloseButton size="md" iconSize="30px" className="!bg-bgColor !text-red-500" />
                </Modal.Header>
                <Modal.Body className="!bg-bgColor xs-mx:!p-2 !pt-2 !border-primaryColor !border-2 xs-mx:!border xs-mx:!border-t-0 !border-t-0 !rounded-bl-3xl !rounded-br-3xl">
                    {/* Load the resume PDF */}
                    <Document className="w-full !rounded-2xl !overflow-hidden !min-w-40 !min-h-14" file={resumePath}>
                        <Page className="w-full !min-w-40 !min-h-14 md-mx:[&>.react-pdf__Page__canvas]:!w-full md-mx:[&>.react-pdf__Page__canvas]:!h-auto" pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
                    </Document>
                </Modal.Body>
            </Modal.Content>
        </Modal.Root>
    );
};

export default ResumeViewer;
