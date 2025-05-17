import BackArrow from './icons-components/back-arrow'
import CircleInfo from './icons-components/circle-info'
import CircleSuccess from './icons-components/circle-success'
import FormFieldResetter from './icons-components/form-field-resetter'
import Plus from './icons-components/plus'
import TriangleError from './icons-components/triangle-error'
import BottomNavigationHomeIcon from './icons-components/bottom-navigation-home-icon'
import BottomNavigationAccessesIcon from './icons-components/bottom-navigation-accesses-icon'
import BottomNavigationTicketsIcon from './icons-components/bottom-navigation-tickets-icon'
import BottomNavigationProfileIcon from './icons-components/bottom-navigation-profile-icon'
import NotificationIcon from './icons-components/notification-icon'
import BackArrowHeadRed from './icons-components/back-arrow-head-red'
import BackArrowHeadGreen from './icons-components/back-arrow-head-green'
import ShowDetail from './icons-components/show-detail'
import SupportPerson from './icons-components/support-person'
import LogoutRed from './icons-components/logout-red'
import ContractWidget from './icons-components/contract-widget'
import BetweenDatesArrowLeft from './icons-components/between-dates-arrow-left'
import ArrowDown from './icons-components/arrow-down'
import ArrowUp from './icons-components/arrow-up'
import Calendar from './icons-components/calendar'
import Enter from './icons-components/enter'
import Exit from './icons-components/exit'
import Persons from './icons-components/persons'
import Explanation from './icons-components/explanation'
import TicketId from './icons-components/ticket-id'
import NewTicket from './icons-components/new-ticket'
import Attachment from './icons-components/attachment'
import Message from './icons-components/message'
import ArrowLeftGreen from './icons-components/arrow-left-green'
import ArrowLeftGery from './icons-components/arrow-left-grey'
import ArrowDownGreen from './icons-components/arrow-down-green'
import ArrowLeft from './arrow/arrow-left'
import ArrowRight from './arrow/arrow-right'
import HomeHashtagBusiness from './business/home-hashtag'
import InfoIcon from './essetional/info'
import WifiIcon from './hotel/wifi'
import TvIcon from './hotel/tv-light'
import TeaCupIcon from './hotel/tea-cup'
import UserIcon from './hotel/user'
import BarIcon from './hotel/bar'
import Restuarant from './hotel/restuarant'
import BedIcon from './hotel/bed'
import BedroomIcon from './hotel/bedroom'
import ProfileUserIcon from './hotel/profile-user'
import NoteIcon from './content-edit/note'
import TaskIcon from './content-edit/task'
import TickIcon from './essetional/tick'
import MaximizeIcon from './grid/maximize'
import ArrowRightGreen from './arrow/arrow-right-green'

const iconList = {
    triangleError: TriangleError,
    circleInfo: CircleInfo,
    circleSuccess: CircleSuccess,
    formFieldResetter: FormFieldResetter,
    plus: Plus,
    backArrow: BackArrow,
    bottomNavigationhomeIcon: BottomNavigationHomeIcon,
    bottomNavigationaccessesIcon: BottomNavigationAccessesIcon,
    bottomNavigationticketsIcon: BottomNavigationTicketsIcon,
    bottomNavigationprofileIcon: BottomNavigationProfileIcon,
    notificationIcon: NotificationIcon,
    backArrowHeadGreen: BackArrowHeadGreen,
    backArrowHeadRed: BackArrowHeadRed,
    showDetail: ShowDetail,
    supportPerson: SupportPerson,
    logoutRed: LogoutRed,
    contractWidget: ContractWidget,
    betweenDatesArrowLeft: BetweenDatesArrowLeft,
    arrowDown: ArrowDown,
    arrowUp: ArrowUp,
    calendar: Calendar,
    enter: Enter,
    exit: Exit,
    persons: Persons,
    explanation: Explanation,
    ticketId: TicketId,
    newTicket: NewTicket,
    attachment: Attachment,
    message: Message,
    arrowLeftGreen: ArrowLeftGreen,
    arrowLeftGery: ArrowLeftGery,
    arrowDownGreen: ArrowDownGreen,
    ArrowLeft:ArrowLeft,
    ArrowRight:ArrowRight,
    HomeHashtagBusiness:HomeHashtagBusiness,
    InfoIcon:InfoIcon,
    WifiIcon:WifiIcon,
    TvIcon:TvIcon,
    TeaCupIcon:TeaCupIcon,
    UserIcon:UserIcon,
    BarIcon:BarIcon,
    Restuarant:Restuarant,
    BedIcon:BedIcon,
    BedroomIcon:BedroomIcon,
    ProfileUserIcon:ProfileUserIcon,
    NoteIcon:NoteIcon,
    TaskIcon:TaskIcon,
    TickIcon:TickIcon,
    MaximizeIcon:MaximizeIcon,
    ArrowRightGreen:ArrowRightGreen
}

export default iconList

export type IconName = keyof typeof iconList