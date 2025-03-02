import Image from 'next/image';

import React from 'react';

import DOMPurify from 'dompurify';

import Wrapper from "@/components/utilities/Wrapper";


function isReactElement(icon) {
  return React.isValidElement(icon);
}

function isReactComponent(icon) {
  return (
    typeof icon === 'function' &&
    (
      icon.prototype?.isReactComponent || 
      String(icon).includes('createElement') || 
      React.isValidElement(React.createElement(icon))
    )
  );
}

function isImage(icon) {
  const imageExtensions = /\.(jpg|jpeg|png|gif|svg|webp|bmp|tiff|heic|heif|ico|avif|raw|cr2|nef|arw|dng|jfif|psd|eps|pdf|exr|tga|pcx|xcf)$/i;
  return typeof icon === 'string' && imageExtensions.test(icon);
};

function isHTML(icon) {
  return /<[^>]+>/.test(icon);
}

function isString(icon) {
  return typeof icon === "string";
}


const Icon = ({
  className = "",
  innerClassName = "",
  icon = null,
  alt = "",
  tag = "div",
  ...props
}) => {

  if (isReactElement(icon)) {
    return (
      React.cloneElement(icon, { 'className': className, 'aria-label': alt, ...props })
    );
  }

  else if (isReactComponent(icon)) {
    const TheIcon = icon;
    return (
      <TheIcon className={className} aria-label={alt} {...props}/>
    );
  }

  else if (isImage(icon)) {
    return (
      <div className={className} {...props}>
        <Image
          className={innerClassName}
          fill
          src={icon}
          alt={alt}
        />
      </div>
    );
  }

  else if (isHTML(icon)) {

    const sanitizedHTML = DOMPurify.sanitize(icon);
    
    return (
      <Wrapper
        tag={tag}
        className={className}
        dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
        {...props}
      />
    );
  }

  else if (isString(icon)) {
    return (
      <span className={className} {...props}>
        {icon}
      </span>
    );
  }

  else {
    return null;
  }
};


export default Icon;