import Image from "next/image";

import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';
import Logo from "@/app/public/nptel.png";

export function baseOptions(): BaseLayoutProps {

  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <Image className="rounded-full" src={Logo} height={18} width={18} alt="nptel" />
          {appName}
        </div>
      ),
      transparentMode: 'top',
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
