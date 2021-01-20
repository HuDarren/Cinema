import React from "react";

export default function network() {
  return (
    <div className="blog-container">
      <div className="blog-space2" />
      <img
        alt="img"
        className="blog-image"
        src="https://res.cloudinary.com/dsi0jbonx/image/upload/v1594047362/unnamed_q4hsd2.jpg"
      />
      <p className="blog-text">This post is about Computer Networks.</p>
      <p className="blog-text">
        How do computers share information and connect with other devices?
      </p>

      <p>
        A LAN ( Local Area Network ) is a group of computers and devices that
        are connected together and are typically confined in a small area. This
        allow multiple devices like computers to share devices like a single
        printer. Technologies that are used in LAN are Ethernet cables and WIFI.
      </p>
      <p>
        A series of computers can be connected to a common ethernet and when a
        computer want to sent data to another computer, it writes the data as an
        electrical signal onto the cable and the receiving computer translate
        the information when received. When data is sent using an ethernet ,
        each computer is required to have a Media access control address (MAC
        Address) so the receiving computer will only process data that is sent
        to their address. Switches in Ethernet manage the sharing of data
        connected between these devices in the network. This process is the same
        when data is carried through the air using radio waves, Wifi.
      </p>
      <p>
        The internet is the connection of smaller networks and interconnection
        of these networks. Your device can be connected to a LAN and those
        devices can be connected to a WAN (Wide Area Network ) , likely a router
        run by your internet service provider. That router might be connected to
        a bigger router with larger bandwidth.
      </p>
      <p>
        A router connects multiple switches and their respective networks to
        form a larger network. Routing is used to receive, analyze and transfer
        packets between networks. Large data can be broken to smaller pieces of
        data (packets) to allow faster transfer of data. Each device have a
        unique IP address and each packet contains a destination address on the
        network , so routers know where to forward them , this process is called
        the internet Protocol. TCP and UDP are two protocols , that is built on
        top of IP that determine how data is exchanged over the internet.
      </p>
      <p className="blog-text">TCP ( Transmission control protocol )</p>
      <li>
        Packets are checked for errors using a checkSum to ensure no
        modification of the packet.
      </li>
      <li>
        Packets are given sequential numbers and are put back in sequential
        order when arrived at destination, to ensure data arrives exactly as it
        was sent without modifications.
      </li>
      <li>
        Packets are acknowledged by recipient to ensure packet was sent, if no
        acknowledgment, packets are sent again ,which can slow the bandwidth.{" "}
      </li>
      <li>Example of usage : emails, webpages </li>
      <p />
      <p className="blog-text">UDP ( User Datagram Protocol ) </p>
      <li>
        Packets do not require acknowledgment by recipients so packets are not
        resent if a packet gets lost in transit.
      </li>
      <li>
        Packets don't have sequential numbers so they might be out of order when
        received
      </li>
      <li>
        Packets are checked for errors using checkSum to ensure no modification
        of the packet.
      </li>
      <li> Example of usage : Media streaming , games </li>
      <p />
      <p>
        Computers connect to other devices by using a IP address, a series of
        number. The Domain name system( DNS ) was developed to help translate
        and map IP addresses to domain names. When a user enter a domain name on
        a web browser, the root server will accept the request and sent it to
        the Top-Level Domain Name Server, which will store the IP address of the
        second-level Domain within the TLD Name. The IP address for the website
        will be sent back to the Domain Name server and then back to your
        computer. The user would then be able to connect to the web server to
        make HTTP ( Hypertext Transfer Protocol) requests.
      </p>
      <p className="blog-text"> Domains : </p>
      <li>Top level Domains : .com , .edu, .gov, .net</li>
      <li>Second level Domains: youtube.com , pbs.gov</li>
      <li>Sub-Domains: it.netflix.com </li>
      <p />
      <p>That is how data is sent and received between multiple devices. </p>

      <p />
      <p />
      <p />
      <p />

      <div className="blog-space" />
    </div>
  );
}
