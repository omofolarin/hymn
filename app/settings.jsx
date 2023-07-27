import { SafeAreaView, Switch } from "react-native";
import { colorStyles, componentStyles, spacingStyle } from "../style";

import { ListItem } from "../components";
import { SvgXml } from "react-native-svg";
import { View } from "react-native";
import { useRouter } from "expo-router";

export default function Settings() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View
          style={[
            componentStyles.cardContainer,
            spacingStyle.my28,
            spacingStyle.mx16,
            colorStyles.bgWhite,
            { width: "92%" },
            { borderRadius: 8 },
          ]}
        >
          <ListItem
            title="Dark Mode"
            leading={
              <SvgXml
                xml={`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8333 1.66663C9.18516 1.66663 7.57399 2.15537 6.20358 3.07105C4.83317 3.98672 3.76507 5.28821 3.13434 6.81093C2.50361 8.33365 2.33858 10.0092 2.66013 11.6257C2.98167 13.2422 3.77534 14.7271 4.94078 15.8925C6.10622 17.0579 7.59107 17.8516 9.20758 18.1732C10.8241 18.4947 12.4996 18.3297 14.0224 17.6989C15.5451 17.0682 16.8466 16.0001 17.7622 14.6297C18.6779 13.2593 19.1667 11.6481 19.1667 9.99996C19.1667 9.57403 19.1296 9.14811 19.0741 8.7407C18.6114 9.38946 18.0001 9.91798 17.2913 10.282C16.5825 10.6461 15.7968 10.8351 15 10.8333C13.94 10.8333 12.9074 10.4967 12.0511 9.87186C11.1948 9.24707 10.5591 8.36645 10.2357 7.357C9.91225 6.34756 9.9178 5.26147 10.2515 4.25538C10.5853 3.2493 11.23 2.37522 12.0926 1.75922C11.6852 1.70366 11.2593 1.66663 10.8333 1.66663Z" fill="black" fill-opacity="0.8"/>
                      </svg>
                  `}
              />
            }
            onPress={() => router.push("/settings")}
            trailing={
              <View style={{ width: "100%" }}>
                <Switch style={{ right: 20 }} />
              </View>
            }
          />
          <ListItem
            leading={
              <SvgXml
                xml={`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0001 18.3333C8.86119 18.3333 7.7848 18.1144 6.77092 17.6766C5.75703 17.2388 4.87147 16.6416 4.11425 15.885C3.35758 15.1283 2.76036 14.243 2.32258 13.2291C1.8848 12.2152 1.66619 11.1388 1.66675 9.99996C1.66675 8.84718 1.88564 7.76718 2.32342 6.75996C2.76119 5.75274 3.35842 4.87107 4.11508 4.11496C4.87175 3.35774 5.75675 2.76051 6.77008 2.32329C7.78342 1.88607 8.86008 1.66718 10.0001 1.66663C11.1529 1.66663 12.2329 1.88551 13.2401 2.32329C14.2473 2.76107 15.129 3.35829 15.8851 4.11496C16.6423 4.87163 17.2395 5.75357 17.6767 6.76079C18.114 7.76801 18.3329 8.84774 18.3334 9.99996C18.3334 11.1388 18.1145 12.2152 17.6767 13.2291C17.239 14.243 16.6417 15.1286 15.8851 15.8858C15.1284 16.6425 14.2465 17.2397 13.2392 17.6775C12.232 18.1152 11.1523 18.3338 10.0001 18.3333ZM10.0001 16.625C10.3612 16.125 10.6737 15.6041 10.9376 15.0625C11.2015 14.5208 11.4167 13.9444 11.5834 13.3333H8.41675C8.58342 13.9444 8.79869 14.5208 9.06258 15.0625C9.32647 15.6041 9.63897 16.125 10.0001 16.625ZM7.83342 16.2916C7.58342 15.8333 7.36453 15.3575 7.17675 14.8641C6.98897 14.3708 6.83286 13.8605 6.70842 13.3333H4.25008C4.65286 14.0277 5.15647 14.6319 5.76092 15.1458C6.36536 15.6597 7.05619 16.0416 7.83342 16.2916ZM12.1667 16.2916C12.9445 16.0416 13.6356 15.6597 14.2401 15.1458C14.8445 14.6319 15.3479 14.0277 15.7501 13.3333H13.2917C13.1667 13.8611 13.0106 14.3716 12.8234 14.865C12.6362 15.3583 12.4173 15.8338 12.1667 16.2916ZM3.54175 11.6666H6.37508C6.33342 11.3888 6.30203 11.1144 6.28092 10.8433C6.2598 10.5722 6.24953 10.2911 6.25008 9.99996C6.25008 9.70829 6.26064 9.42718 6.28175 9.15663C6.30286 8.88607 6.33397 8.61163 6.37508 8.33329H3.54175C3.4723 8.61107 3.42008 8.88551 3.38508 9.15663C3.35008 9.42774 3.33286 9.70885 3.33342 9.99996C3.33342 10.2916 3.35092 10.5727 3.38592 10.8433C3.42092 11.1138 3.47286 11.3883 3.54175 11.6666ZM8.04175 11.6666H11.9584C12.0001 11.3888 12.0315 11.1144 12.0526 10.8433C12.0737 10.5722 12.084 10.2911 12.0834 9.99996C12.0834 9.70829 12.0729 9.42718 12.0517 9.15663C12.0306 8.88607 11.9995 8.61163 11.9584 8.33329H8.04175C8.00008 8.61107 7.96869 8.88551 7.94758 9.15663C7.92647 9.42774 7.91619 9.70885 7.91675 9.99996C7.91675 10.2916 7.9273 10.5727 7.94842 10.8433C7.96953 11.1138 8.00064 11.3883 8.04175 11.6666ZM13.6251 11.6666H16.4584C16.5279 11.3888 16.5801 11.1144 16.6151 10.8433C16.6501 10.5722 16.6673 10.2911 16.6667 9.99996C16.6667 9.70829 16.6492 9.42718 16.6142 9.15663C16.5792 8.88607 16.5273 8.61163 16.4584 8.33329H13.6251C13.6667 8.61107 13.6981 8.88551 13.7192 9.15663C13.7404 9.42774 13.7506 9.70885 13.7501 9.99996C13.7501 10.2916 13.7395 10.5727 13.7184 10.8433C13.6973 11.1138 13.6662 11.3883 13.6251 11.6666ZM13.2917 6.66663H15.7501C15.3473 5.97218 14.844 5.36801 14.2401 4.85413C13.6362 4.34024 12.9451 3.95829 12.1667 3.70829C12.4167 4.16663 12.6356 4.64246 12.8234 5.13579C13.0112 5.62913 13.1673 6.1394 13.2917 6.66663ZM8.41675 6.66663H11.5834C11.4167 6.05551 11.2015 5.47913 10.9376 4.93746C10.6737 4.39579 10.3612 3.87496 10.0001 3.37496C9.63897 3.87496 9.32647 4.39579 9.06258 4.93746C8.79869 5.47913 8.58342 6.05551 8.41675 6.66663ZM4.25008 6.66663H6.70842C6.83342 6.13885 6.9898 5.62829 7.17758 5.13496C7.36536 4.64163 7.58397 4.16607 7.83342 3.70829C7.05564 3.95829 6.36453 4.34024 5.76008 4.85413C5.15564 5.36801 4.6523 5.97218 4.25008 6.66663Z" fill="#5F81E4"/>
                      </svg>`}
              />
            }
            title="Language"
          />
          <ListItem
            leading={
              <SvgXml
                xml={`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.8">
                        <path d="M15.7977 6.64062C14.1871 6.64062 12.748 7.58047 12.1316 9.03516L11.875 9.62969L13.4504 10.3008L13.7066 9.70625C14.0543 8.88594 14.875 8.35664 15.7977 8.35664C17.1473 8.35664 18.0539 9.26562 18.0539 10.6187V10.7086C17.1898 10.7316 16.1535 10.7887 15.2309 10.8977C13.1012 11.1488 11.8301 12.3129 11.8301 14.0117C11.8301 14.9164 12.1707 15.7305 12.7895 16.3004C13.3703 16.8359 14.1621 17.1094 15.0199 17.1094C16.2254 17.1094 17.266 16.823 18.0539 16.225V17.1094H19.7656V10.6187C19.7656 8.31367 18.0969 6.64062 15.7977 6.64062ZM15.0199 15.4324C14.3379 15.4324 13.5414 15.048 13.5414 14.0117C13.5414 13.5957 13.6906 13.3043 14.025 13.0668C14.3508 12.8355 14.85 12.6703 15.4313 12.602C16.282 12.5016 17.2402 12.4477 18.0484 12.4254C17.9641 14.4367 16.9715 15.4324 15.0199 15.4324ZM3.64258 12.7293H8.54492L10.193 17.1094H12.0312L6.05469 1.875L0.15625 17.1094H1.99453L3.64258 12.7293ZM6.09375 6.27773L7.90039 11.0156H4.28711L6.09375 6.27773Z" fill="#D90429"/>
                        </g>
                      </svg>`}
              />
            }
            title="Fonts"
            hideDivider
          />
        </View>
      </View>
    </SafeAreaView>
  );
}