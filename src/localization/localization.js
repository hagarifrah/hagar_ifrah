import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
    en:{
        lang:'English',
        send:"SEND",
        contactMe:'CONTACT',
        title:'TITLE',
        phone:'PHONE',
        branding:'BRANDING',
        fullName:"FULL NAME",
        message:'MESSAGE',
        moreDesign:"MORE DESIGN",
        uiux:'UI/UX',
        events:'Events',
        bookDesign:'Booklet design',
        photoShopDesign:"PHOTOSHOP DESIGN",
        mainTitle: ".Hi my name is Hagar! I studied a practical degree in media design at the Be'er Sheva College of Technology.\n" +
            ".I am a perfectionist, competitive and always striving to learn new things\n\n" +
            ".I really like the minimalist and clean design And places emphasis on even the smallest details\n" +
            ".So whether you have a small or medium business, I would love to promote it with a unique and contemporary branding that will set you apart from your competitors\n" +
            "Here are some of my works"
    },
    heb: {
        bookDesign:'עיצוב חוברות',
        events:'מיתוג לאירועים',
        branding:'מיתוג',
        photoShopDesign:"עיצובים בפוטושופ",
        moreDesign:'עיצובים נוספים',
        lang:'Hebrew',
        send:"שלח",
        contactMe:'צור קשר',
        title:'כותרת',
        phone:'פלאפון',
        fullName:"שם מלא",
        message:'הודעה',
        uiux:'UI/UX',

        mainTitle:"היי שמי הגר! למדתי תואר הנדסאי לעיצוב מדיה, במכללה הטכנולוגית באר שבע.\n" +
            "אני פרפקציוניסטית, תחרותית ותמיד שואפת ללמוד דברים חדשים.\n\n" +
            "אני מאוד אוהבת את העיצוב המנימליסטי והנקי ושמה דגש גם על הפרטים הקטנים ביותר.\n" +
            "אז בין אם יש לכם עסק קטן או בינוני, אשמח לקדם אותו על ידי מיתוג ייחודי ועכשיווי שיבדיל אתכם מהמתחרים. \n" +
            "הנה כמה מהעבודות שלי"
    }
});

export default strings;
