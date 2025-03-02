"use client";

import Link from "next/link";

import Badge from "@/components/utilities/Badge";
import Icon from "@/components/utilities/Icon";

import useRouteActive from "@/hooks/utilities/useRouteActive";


export default function NavItem({
  className = "",
  title = {
    className: "",
    name: "",
  },
  href = {
    className: "",
    activeClassName: "",
    pathname: "#",
  },
  icon = {
    className: "",
    contClassName: "",
    status: {
      general: null,
      active: null,
      inactive: null,
    },
    badge: {
      isBadgeEnabled: false,
    },
  },
  target = "_self",
  enabled = true,
}) {

  const { isActive } = useRouteActive({ href: href?.pathname });

  const isIconEnabled = icon?.status?.general || icon?.status?.active || icon?.status?.inactive;
  const requiredIcon = isActive ? icon?.status?.active : icon?.status?.inactive ?? icon?.status?.general;


  return (
    enabled && (
      <li className={`nav-item list-none ${className}`}>
        <Link
          className={`
            ${href?.className ? href?.className : ""}
            ${isActive ? href?.activeClassName : ""}
            link
          `}
          href={href?.pathname ? href?.pathname : "#"}
          target={target}
          scroll={false}
        >
          {isIconEnabled ? (
            !icon?.badge?.isBadgeEnabled ? (
              <div className={`icon-cont ${icon.contClassName}`}>
                <Icon className={icon?.className} icon={requiredIcon} />
              </div>
            ) : (
              <Badge
                icon={{
                  icon: requiredIcon,
                }}
                {...icon.badge}
              />
            )
          ) : null}

          {title?.name && (
            <div className={`${title?.className}`}>{title?.name}</div>
          )}
        </Link>
      </li>
    )
  );
}
