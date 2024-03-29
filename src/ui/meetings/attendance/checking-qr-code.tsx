import { Button } from "@/shared-components/system/button";
import { DialogWrapper } from "@/shared-components/system/dialog";
import { Heading } from "@/shared-components/system/heading";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { FaQrcode } from "react-icons/fa";
import QRCode from "react-qr-code";

export const CheckingQRCode: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)} icon={<FaQrcode />}>
        QR Code
      </Button>
      <DialogWrapper isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex flex-col gap-3">
          <Dialog.Title as={Heading} level="h2">
            QR Code
          </Dialog.Title>
          <QRCode
            value={window.location.host + window.location.pathname}
            bgColor="#111"
            fgColor="#fff"
          />
        </div>
      </DialogWrapper>
    </>
  );
};
