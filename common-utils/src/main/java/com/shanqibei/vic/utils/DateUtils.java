package com.shanqibei.vic.utils;

import com.google.common.base.Strings;
import org.joda.time.*;
import org.springframework.util.Assert;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * Created by vic
 * Create time : 2017/7/27 上午10:22
 */
public class DateUtils {

    /**
     * 一天转化为小时。单位：小时
     */
    public static final int DAY_2_HOUR = 24;
    public static final int WEEK_2_DAY = 7;
    public static final long SECOND_LONG = 1000L;
    public static final long MINUTE_LONG = 60 * SECOND_LONG;
    public static final long HOUR_LONG = 60 * MINUTE_LONG;
    public static final long DAY_LONG = DAY_2_HOUR * HOUR_LONG;
    public static final long MONTH_LONG = 30 * DAY_LONG;
    public static final long YEAR_LONG = 365 * DAY_LONG;
    public static final String DATE_FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND = "yyyy/MM/dd HH:mm:ss";
    public static final String DATE_FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_ = "yyyy/MM/dd HH:mm";
    public static final String DATE_FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND2 = "yyyy-MM-dd HH:mm:ss";
    public static final String DATE_FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE2 = "yyyyMMddHH:mm";
    public static final String DATE_FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE3 = "yyyyMMddHHmm";
    public static final String DATE_FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE4 = "yyyyMMddHHmmss";
    public static final String DATE_FORMAT_MONTH_DAY = "MM月dd日";
    public static final String DATE_FORMAT_MONTH_DAY2 = "MMdd";
    public static final String DATE_FORMAT_MONTH_DAY3 = "MM/dd";
    public static final String DATE_FORMAT_HOUR_MINUTE = "HH:mm";
    public static final String DATE_FORMAT_YEAR_MONTH_DAY = "yyyyMMdd";
    public static final String DATE_FORMAT_YEAR_MONTH_DAY2 = "yyyy-MM-dd";
    public static final String DATE_FORMAT_YEAR_MONTH_DAY_STRING = "yy年MM月dd日";
    public static final String DATE_FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE = "yyyy-MM-dd HH:mm";
    public static final int ONE_HOUR_MINUTE_COUNT = 60;

    public static Map<Integer, String> dayOfWeekMap = new HashMap() {{
        put(1, "一");
        put(2, "二");
        put(3, "三");
        put(4, "四");
        put(5, "五");
        put(6, "六");
        put(7, "日");
    }};


    /**
     * @param date1 时间A
     * @param date2 时间B
     * @return 是否2个为同一天
     */
    public static boolean isSameDay(Date date1, Date date2) {
        return !(date1 == null || date2 == null) && diffDay(date1, date2) == 0;
    }

    /**
     * 计算两个日期之间相差的天数.不包括今天。
     *
     * @param date1 时间A
     * @param date2 时间B
     * @return 时间A与时间B的差值(前者 - 后者)。当有任何一个时间为空时，返回null
     * @see #diffDay(Date, Date, boolean) 取代。
     * 原因：该方法不精准。
     */
    public static Integer diffDay(Date date1, Date date2) {
        return diffDay(date1, date2, false);
    }

    /**
     * 计算两个日期之间相差的天数
     *
     * @param fDate        时间A
     * @param oDate        时间B
     * @param includeToday 是否包括今天
     * @return 时间A与时间B的差值(前者 - 后者)。当有任何一个时间为空时，返回null
     */
    public static Integer diffDay(Date fDate, Date oDate, boolean includeToday) {
        if (fDate == null || oDate == null) {
            return null;
        }
        DateTime begin = new DateTime(fDate);
        DateTime end = new DateTime(oDate);
        int days = Days.daysBetween(end.toLocalDate(), begin.toLocalDate()).getDays();
        return includeToday ? days + 1 : days;
    }

    /**
     * 计算量个日期之间相差的小时数
     *
     * @param fDate       时间A
     * @param oDate       时间B
     * @param includeHour 是否包括当前小时
     * @return 时间A与时间B的差值(前者 - 后者)。当有任何一个时间为空时，返回null
     */
    @SuppressWarnings("UnusedDeclaration")
    public static Integer diffHour(Date fDate, Date oDate, boolean includeHour) {
        if (fDate == null || oDate == null) {
            return null;
        }
        DateTime begin = new DateTime(fDate);
        DateTime end = new DateTime(oDate);
        int hours = Hours.hoursBetween(end.toLocalDateTime(), begin.toLocalDateTime()).getHours();
        return includeHour ? hours + 1 : hours;
    }

    /**
     * 比较两个时间的秒差
     *
     * @param fDate 开始时间
     * @param oDate 结束时间
     * @return
     */
    public static Integer diffSecond(Date fDate, Date oDate) {
        if (fDate == null || oDate == null) {
            return null;
        }
        DateTime begin = new DateTime(fDate);
        DateTime end = new DateTime(oDate);
        return Seconds.secondsBetween(begin.toLocalDateTime(), end.toLocalDateTime()).getSeconds();
    }

    /**
     * 比较两个时间的分差
     *
     * @param fDate 开始时间
     * @param oDate 结束时间
     * @return
     */
    public static Integer diffMinutes(Date fDate, Date oDate) {
        if (fDate == null || oDate == null) {
            return null;
        }
        DateTime begin = new DateTime(fDate);
        DateTime end = new DateTime(oDate);
        return Minutes.minutesBetween(begin.toLocalDateTime(), end.toLocalDateTime()).getMinutes();
    }

    /**
     * @param date 时间
     * @return 参数日期是否为今天
     */
    public static boolean isToday(Date date) {
        return isSameDay(date, new Date());
    }

    /**
     * 计算当期时间相差的日期
     *
     * @param field  日历字段.<br/>eg:Calendar.MONTH,Calendar.DAY_OF_MONTH,<br/>Calendar.HOUR_OF_DAY等.
     * @param amount 相差的数值
     * @return 计算后的日志
     */
    public static Date addDate(int field, int amount) {
        return addDate(null, field, amount);
    }

    /**
     * 计算当期时间相差的日期
     *
     * @param date   设置时间
     * @param field  日历字段.<br/>eg:Calendar.MONTH,Calendar.DAY_OF_MONTH,<br/>Calendar.HOUR_OF_DAY等.
     * @param amount 相差的数值
     * @return 计算后的日志
     */
    public static Date addDate(Date date, int field, int amount) {
        Calendar c = Calendar.getInstance();
        if (date != null) {
            c.setTime(date);
        }
        c.add(field, amount);
        return c.getTime();
    }

    /**
     * 设置指定时间的相关field
     *
     * @param date   设置时间
     * @param field  日历字段.<br/>eg:Calendar.MONTH,Calendar.DAY_OF_MONTH,<br/>Calendar.HOUR_OF_DAY等.
     * @param amount 设置的值
     * @return 计算后的日志
     */
    public static Date setDate(Date date, int field, int amount) {
        Calendar c = Calendar.getInstance();
        if (date != null) {
            c.setTime(date);
        }
        c.set(field, amount);
        return c.getTime();
    }

    /**
     * 设置指定时间的相关field
     *
     * @param date        时间
     * @param hour        小时，当null的时候，不进行改变
     * @param minute      分钟，当null的时候，不进行改变
     * @param second      秒，当null的时候，不进行改变
     * @param milliSecond 毫秒，当null的时候，不进行改变
     * @return 结果
     */
    public static Date setDate(Date date, Integer hour, Integer minute, Integer second, Integer milliSecond) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        if (hour != null) {
            calendar.set(Calendar.HOUR_OF_DAY, hour);
        }
        if (minute != null) {
            calendar.set(Calendar.MINUTE, minute);
        }
        if (second != null) {
            calendar.set(Calendar.SECOND, second);
        }
        if (milliSecond != null) {
            calendar.set(Calendar.MILLISECOND, milliSecond);
        }
        return calendar.getTime();
    }

    /**
     * 获取指定天结束时间
     *
     * @param date 日期
     * @return 获得该日期的开始
     */
    public static Date getDayBegin(Date date) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        setCalender(calendar, 0, 0, 0, 0);
        return calendar.getTime();
    }

    /**
     * 获取当天开始时间
     *
     * @return 获得该日期的开始
     */
    public static Date getDayBegin() {
        return getDayBegin(new Date());
    }

    /**
     * 获取指定天结束时间
     *
     * @param date 日期
     * @return 获得该日期的结束
     */
    public static Date getDayEnd(Date date) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        setCalender(calendar, 23, 59, 59, 999);
        return calendar.getTime();
    }

    /**
     * 获取当天结束时间
     *
     * @return 获得该日期的开始
     */
    public static Date getDayEnd() {
        return getDayEnd(new Date());
    }

    /**
     * 获取当前日期，毫秒为0
     *
     * @return
     */
    public static Date getCurrentDate() {
        return DateUtils.setDate(new Date(), null, null, null, 0);
    }

    /**
     * 指定时间是否是一天开始时间
     */
    public static boolean isDayBegin(Date date) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        if (calendar.get(Calendar.HOUR_OF_DAY) == 0 && calendar.get(Calendar.MINUTE) == 0 && calendar.get(Calendar.SECOND) == 0) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 指定时间是否是一天结束时间
     */
    public static boolean isDayEnd(Date date) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        if (calendar.get(Calendar.HOUR_OF_DAY) == 23 && calendar.get(Calendar.MINUTE) == 59 && calendar.get(Calendar.SECOND) == 59) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 指定时间是否是一天开始时间（严格模式，校验毫秒）
     */
    public static boolean isDayBeginStrictly(Date date) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        if (calendar.get(Calendar.HOUR_OF_DAY) == 0 && calendar.get(Calendar.MINUTE) == 0 && calendar.get(Calendar.SECOND) == 0 && calendar.get(Calendar.MILLISECOND) == 0) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 指定时间是否是一天结束时间（严格模式，校验毫秒）
     */
    public static boolean isDayEndStrictly(Date date) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        if (calendar.get(Calendar.HOUR_OF_DAY) == 23 && calendar.get(Calendar.MINUTE) == 59 && calendar.get(Calendar.SECOND) == 59 && calendar.get(Calendar.MILLISECOND) == 999) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 周六周日判断
     *
     * @param date
     * @return
     */
    public static boolean isWeekend(Date date) {
        boolean weekend = false;
        Calendar cal = Calendar.getInstance();
        cal.setTime(date);
        if (cal.get(Calendar.DAY_OF_WEEK) == Calendar.SATURDAY
                || cal.get(Calendar.DAY_OF_WEEK) == Calendar.SUNDAY) {
            weekend = true;
        }
        return weekend;
    }

    public static Date getMinuteBegin(Date date) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        setCalender(calendar, calendar.get(Calendar.HOUR_OF_DAY), calendar.get(Calendar.MINUTE),
                0, 0);
        return calendar.getTime();
    }

    public static Date getMinuteEnd(Date date) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        setCalender(calendar, calendar.get(Calendar.HOUR_OF_DAY), calendar.get(Calendar.MINUTE),
                59, 999);
        return calendar.getTime();
    }

    /**
     * 获取该时间所在的小时开始时间点
     */
    public static Date getHourBegin(Date date) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        calendar.set(Calendar.MINUTE, 0);
        calendar.set(Calendar.SECOND, 0);
        calendar.set(Calendar.MILLISECOND, 0);
        return calendar.getTime();
    }

    /**
     * 获取该时间所在的小时结束时间点
     */
    public static Date getHourEnd(Date date) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        calendar.set(Calendar.MINUTE, 59);
        calendar.set(Calendar.SECOND, 59);
        calendar.set(Calendar.MILLISECOND, 999);
        return calendar.getTime();
    }

    /**
     * 获取该日期当月第一天
     *
     * @param date
     * @return
     */
    public static Date getMonthBegin(Date date) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(getDayBegin(date));
        calendar.set(Calendar.DAY_OF_MONTH, 1);
        return calendar.getTime();
    }

    /**
     * 获取该日期当月最后一天
     *
     * @param date
     * @return
     */
    public static Date getMonthEnd(Date date) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(getDayEnd(date));
        calendar.add(Calendar.MONTH, 1);
        calendar.set(Calendar.DAY_OF_MONTH, 1);
        calendar.add(Calendar.DAY_OF_MONTH, -1);
        return calendar.getTime();
    }

    /**
     * 判断该日期为星期几？
     *
     * @param pTime   日期
     * @param pattern 时间格式化(若为空,则pattern 默认为 'yyyy/MM/dd HH:mm:ss')
     * @return 1-星期一,2-星期二,.....,6-星期六,7-星期天
     */
    public static Integer dayForWeek(String pTime, String pattern) throws Exception {
        if (Strings.isNullOrEmpty(pattern)) {
            pattern = DATE_FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND;
        }
        Date date = parse(pTime, pattern);
        return dayForWeek(date);
    }

    /**
     * 判断该日期为星期几？
     *
     * @param date 日期
     * @return 1-星期一,2-星期二,.....,6-星期六,7-星期天
     */
    public static Integer dayForWeek(Date date) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        Integer dayForWeek = 0;
        if (calendar.get(Calendar.DAY_OF_WEEK) == 1) {
            dayForWeek = 7;
        } else {
            dayForWeek = calendar.get(Calendar.DAY_OF_WEEK) - 1;
        }
        return dayForWeek;
    }

    /**
     * 判断该日期为星期几
     *
     * @param date 日期
     * @return 一, 二, ....., 六, 日
     */
    public static String dayForWeek2(Date date) {
        Integer dayForWeek = dayForWeek(date);
        return dayOfWeekMap.get(dayForWeek);
    }

    /**
     * 获取几号
     *
     * @param date
     * @return
     */
    public static Integer dayForMonth(Date date) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        return calendar.get(Calendar.DAY_OF_MONTH);
    }

    /**
     * 获取月份
     *
     * @param date
     * @return
     */
    public static Integer monthForYear(Date date) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        return calendar.get(Calendar.MONTH) + 1;
    }

    /**
     * 取得日期所在周的下星期一<br />
     * 注：若参数date为空，则取得第当前日期所对应的下一周
     *
     * @param date 所在日期
     */
    public static Date getNextMonday(Date date) {
        Calendar cal = Calendar.getInstance();
        // 没有设置日期,则取当前时间
        if (date != null) {
            cal.setTime(date);
        }
        int day = cal.get(Calendar.DAY_OF_WEEK);
        if (day != Calendar.SUNDAY) {
            cal.add(Calendar.WEEK_OF_MONTH, 1);
        }
        cal.set(Calendar.DAY_OF_WEEK, Calendar.MONDAY);

        return cal.getTime();
    }

    /**
     * 取得日期所在周的下星期日<br />
     * 注：若参数date为空，则取得第当前日期所对应的下一周
     *
     * @param date 所在日期
     */
    public static Date getNextSunday(Date date) {
        Calendar cal = Calendar.getInstance();
        // 没有设置日期,则取当前时间
        if (date != null) {
            cal.setTime(date);
        }
        int day = cal.get(Calendar.DAY_OF_WEEK);

        if (day != Calendar.SUNDAY) {
            cal.add(Calendar.WEEK_OF_MONTH, 2);
        } else {
            cal.add(Calendar.WEEK_OF_MONTH, 1);
        }
        cal.set(Calendar.DAY_OF_WEEK, Calendar.SUNDAY);
        return cal.getTime();
    }

    /**
     * 取得日期所在周的上个星期一<br />
     * 注：若参数date为空，则取得第当前日期所对应的上一周
     *
     * @param date
     * @return
     */
    public static Date getBeforeWeekMonday(Date date) {
        Calendar cal = Calendar.getInstance();
        if (date != null) {
            cal.setTime(date);
        }
        //n为推迟的周数，1本周，-1向前推迟一周，2下周，依次类推
        int n = -1;
        String monday;
        cal.add(Calendar.DATE, n * 7);

        //想周几，这里就传几Calendar.MONDAY（TUESDAY...）
        cal.set(Calendar.DAY_OF_WEEK, Calendar.MONDAY);
        return cal.getTime();
    }

    /**
     *
     *      注：若参数date为空，则取得第当前日期所对应的上一周
     * @param date
     * @return
     */
    /**
     * 取得日期所在周指定几周前的指定周几<br />
     *
     * @param date 所在日期
     * @param n    n为推迟的周数， 0本周，-1向前推迟一周，1下周，依次类推
     * @param week //想周几，这里就传几Calendar.MONDAY（TUESDAY...）
     * @return
     */
    public static Date getBeforeWeekMonday(Date date, Integer n, Integer week) {
        Calendar cal = Calendar.getInstance();
        if (date != null) {
            cal.setTime(date);
        }
        //默认周一
        if (null == week) {
            week = Calendar.MONDAY;
        }
        cal.add(Calendar.DATE, n * 7);
        cal.set(Calendar.DAY_OF_WEEK, week);
        return cal.getTime();
    }

    /**
     * 取得指定日期所在周的周六/周日
     *
     * @param date
     * @param type 0：周日 1：周六
     * @return
     */
    public static Date getCustomWeekDate(Date date, Integer type) {
        int week = DateUtils.dayForWeek(date);
        if (type == 0) {
            if (week != 7) {
                date = DateUtils.addDate(date, Calendar.DATE, -week);
            }
        } else if (type == 1) {
            if (week != 6) {
                date = DateUtils.addDate(date, Calendar.DATE, week == 7 ? week - 1 : 6 - week);
            }
        }
        return date;
    }

    /**
     * 取得日期所在月的上个月同一天<br />
     * 注：若参数date为空，则取得第当前月所对应的上一月
     *
     * @param date
     * @return
     */
    public static Date getBeforeMonthDay(Date date) {
        Calendar cal = Calendar.getInstance();
        if (date != null) {
            cal.setTime(date);
        }
        cal.add(Calendar.MONTH, -1);
        return cal.getTime();
    }

    public static Date getBeforeYearDay(Date date) {
        Calendar cal = Calendar.getInstance();
        if (date != null) {
            cal.setTime(date);
        }
        cal.add(Calendar.YEAR, -1);
        return cal.getTime();
    }

    /**
     * 取得日期所在周的周末<br />
     * 注：若参数date为空，则取得第当前日期所对应的下一周
     *
     * @param date
     * @return
     */
    public static Date getWeekEnd(Date date) {
        Calendar cal = Calendar.getInstance();
        if (date != null) {
            cal.setTime(date);
        }
        //n为推迟的周数，1本周，-1向前推迟一周，2下周，依次类推
        int n = 1;
        cal.add(Calendar.DATE, n * 7);

        //想周几，这里就传几Calendar.MONDAY（TUESDAY...）
        cal.set(Calendar.DAY_OF_WEEK, Calendar.SUNDAY);
        return cal.getTime();
    }

    /**
     * 取得日期所在周的周一<br />
     * 注：若参数date为空，则取得第当前日期所对应的下一周
     *
     * @param date
     * @return
     */
    public static Date getWeekBegin(Date date) {
        Calendar cal = Calendar.getInstance();
        if (date != null) {
            cal.setTime(date);
        }
        //n为推迟的周数，1本周，-1向前推迟一周，2下周，依次类推
        int n = 1;
        cal.add(Calendar.DATE, n * 7);

        //想周几，这里就传几Calendar.MONDAY（TUESDAY...）
        cal.set(Calendar.DAY_OF_WEEK, Calendar.MONDAY);
        return cal.getTime();
    }

    /**
     * 取得日期所在周的周一<br />
     * 注：若参数date为空，则取得第当前日期所对应的下一周
     *
     * @param date
     * @return
     */
    public static Date getWeekBegin2(Date date) {
        Calendar c = Calendar.getInstance();
        if (date != null) {
            c.setTime(date);
        }
        int dayOfWeek = c.get(Calendar.DAY_OF_WEEK) - 1;
        if (dayOfWeek == 0)
            dayOfWeek = 7;
        c.add(Calendar.DATE, -dayOfWeek + 1);
        return c.getTime();
    }

    /**
     * 取得日期所在周的周末<br />
     * 注：若参数date为空，则取得第当前日期所对应的下一周
     *
     * @param date
     * @return
     */
    public static Date getWeekEnd2(Date date) {
        Calendar c = Calendar.getInstance();
        if (date != null) {
            c.setTime(date);
        }
        int dayOfWeek = c.get(Calendar.DAY_OF_WEEK) - 1;
        if (dayOfWeek == 0)
            dayOfWeek = 7;
        c.add(Calendar.DATE, -dayOfWeek + 8);
        return c.getTime();
    }

    /**
     * 取得日期所在的前一天
     *
     * @param date
     * @return
     */
    public static Date getDayBefore(Date date) {
        Calendar c = Calendar.getInstance();
        if (date != null) {
            c.setTime(date);
        }
        int day = c.get(Calendar.DATE);
        c.set(Calendar.DATE, day - 1);
        return c.getTime();
    }

    /**
     * 取得所在日期的下一天<br/>
     * 注：如date为空,则取到为明天
     *
     * @param date 所在日期
     */
    public static Date getNextDay(Date date) {
        Calendar calendar = Calendar.getInstance();
        if (date != null) {
            calendar.setTime(date);
        }
        calendar.add(Calendar.DAY_OF_YEAR, 1);
        return calendar.getTime();
    }

    /**
     * 获取日期的小时分钟字符串
     *
     * @param date
     * @return
     */
    public static Integer getHourMinute(Date date) {
        int beginHour = DateUtils.getField(date, Calendar.HOUR_OF_DAY);
        int beginMinute = DateUtils.getField(date, Calendar.MINUTE);
        return Integer.valueOf(String.valueOf(beginHour) + String.valueOf(beginMinute));
    }

    /**
     * 获取日期所在月的天数
     *
     * @param date
     * @return
     */
    public static int getDayAccountOfMonth(Date date) {
        Calendar calendar = Calendar.getInstance(Locale.CHINA);
        if (date != null) {
            calendar.setTime(date);
        }
        int day = calendar.getActualMaximum(Calendar.DATE);
        return day;
    }

    /**
     * 取得日期所在月的下个月同一天<br />
     * 注：若参数date为空，则取得第当前月所对应的下一月
     *
     * @param date
     * @return
     */
    public static Date getNextMonthDay(Date date) {
        Calendar cal = Calendar.getInstance();
        if (date != null) {
            cal.setTime(date);
        }
        cal.add(Calendar.MONTH, 1);
        return cal.getTime();
    }

    /**
     * 设置Calendar的小时、分钟、秒、毫秒
     *
     * @param calendar    日历
     * @param hour        小时
     * @param minute      分钟
     * @param second      秒
     * @param milliSecond 毫秒
     */
    public static void setCalender(Calendar calendar, int hour, int minute, int second, int milliSecond) {
        calendar.set(Calendar.HOUR_OF_DAY, hour);
        calendar.set(Calendar.MINUTE, minute);
        calendar.set(Calendar.SECOND, second);
        calendar.set(Calendar.MILLISECOND, milliSecond);
    }

    /**
     * @param date    时间。若为空，则返回空串
     * @param pattern 时间格式化
     * @return 格式化后的时间字符串.
     */
    public static String format(Date date, String pattern) {
        if (date == null) {
            return "";
        }
        return new SimpleDateFormat(pattern).format(date);
    }

    /**
     * @param date    时间。若为空，则返回空串
     * @return 格式化后的时间字符串.
     */
    public static String defaultFormat(Date date) {
        if (date == null) {
            return "";
        }
        return new SimpleDateFormat(DATE_FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND2).format(date);
    }

    /**
     * 格式化日期
     *
     * @param date    时间。若为空，则返回空串
     * @param pattern 时间格式化
     * @param locale  本地化
     * @return 格式化后的时间字符串
     */
    public static String format(Date date, String pattern, Locale locale) {
        if (date == null) {
            return "";
        }
        return new SimpleDateFormat(pattern, locale).format(date);
    }

    public static Date parse(String date, String pattern) {
        try {
            return new SimpleDateFormat(pattern).parse(date);
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }
    }

    public static String formatTimestamp(Long time, String pattern) {
        return DateUtils.format(new Date(time), pattern);
    }

    /**
     * @param date 时间。不允许空
     * @return 时间对应的int值。比如说2013/3/4转换为20130304
     */
    public static Integer formatDate2Int(Date date) {
        Assert.notNull(date, "date is null!");
        return Integer.valueOf(format(date, DATE_FORMAT_YEAR_MONTH_DAY));
    }

    /**
     * 将int形日期转为Date
     *
     * @param dateInt 日期int形式，如20150909
     */
    public static Date parseInt2Date(Integer dateInt) {
        return parse(String.valueOf(dateInt), DATE_FORMAT_YEAR_MONTH_DAY);
    }


    /**
     * @param year        年
     * @param mouth       月
     * @param day         日
     * @param hour        小时
     * @param minute      分钟
     * @param second      秒
     * @param milliSecond 毫秒
     * @return 指定时间
     */
    @SuppressWarnings("UnusedDeclaration")
    public static Date buildTime(Integer year, Integer mouth, Integer day, Integer hour, Integer minute,
                                 Integer second, Integer milliSecond) {
        Calendar calendar = Calendar.getInstance();
        calendar.set(Calendar.YEAR, year);
        calendar.set(Calendar.MONTH, mouth - 1);
        calendar.set(Calendar.DAY_OF_MONTH, day);
        calendar.set(Calendar.HOUR_OF_DAY, hour);
        calendar.set(Calendar.MINUTE, minute);
        calendar.set(Calendar.SECOND, second);
        calendar.set(Calendar.MILLISECOND, milliSecond);
        return calendar.getTime();
    }

    /**
     * 判断当时时间是否在某个时间范围内
     *
     * @param minHour
     * @param minMin
     * @param maxHour
     * @param maxMin
     * @return
     */
    public static boolean isBetweenTheTimeZone(int minHour, int minMin, int maxHour, int maxMin) {
        return isBetweenTheTimeZone(minHour * 100 + minMin, maxHour * 100 + maxMin);
    }

    public static boolean isBetweenTheTimeZone(int beginTime, int endTime) {
        return isBetweenTheTimeZone(null, beginTime, endTime);
    }

    public static boolean isBetweenTheTimeZone(Date date, int beginTime, int endTime) {
        Calendar calendar = Calendar.getInstance();
        if (date != null) {
            calendar.setTime(date);
        }
        int now = calendar.get(Calendar.HOUR_OF_DAY) * 100 + calendar.get(Calendar.MINUTE);
        return beginTime <= now && now <= endTime;
    }

    /**
     * 获得时间指定的field
     *
     * @param time  时间
     * @param field filed
     * @return 值
     */
    public static int getField(Date time, int field) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(time);
        return calendar.get(field);
    }

    /**
     * 获取两个时间质监相差几秒
     *
     * @param oldTime
     * @param newTime
     * @return
     */
    public static int diffSeconds(Date oldTime, Date newTime) {
        Long time1 = oldTime.getTime();
        Long time2 = newTime.getTime();
        Long seconds = (time2 - time1) / 1000;
        return seconds.intValue();
    }

    /**
     * 转换成当天该时分秒下的Date日期
     *
     * @param time 格式 "HH:mm:ss"
     * @return Date 格式 "yyyy-MM-dd HH:mm:ss"
     */
    public static Date setTime(String time) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        String currentDate = dateFormat.format(new Date());
        currentDate = currentDate + " " + time;
        dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        try {
            return dateFormat.parse(currentDate);
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * 当前系统时间+分钟数 得到新的时间
     *
     * @param minutes
     * @return
     */
    public static Date currentTimePlusMinutes(Long minutes) {
        Long currentTime = System.currentTimeMillis() + minutes * 60 * 1000;
        return new Date(currentTime);
    }

    /**
     * 转换为小时
     *
     * @param minute   分钟/秒数
     * @param timeType 1：分钟 2：秒
     * @return
     */
    public static String calculateTime(Integer minute, Integer timeType) {
        if (minute == null) {
            return "0";
        }
        if (timeType == null) {
            timeType = 1;
        }
        if (timeType == 1) {
            if (minute >= 0 && minute < 60) {
                return minute + "分钟";
            }
            if (minute >= 60 && minute < 1440) {
                return minute / 60 + "小时" + minute % 60 + "分钟";
            }
            if (minute >= 1440) {
                return minute / 1440 + "天" + minute % 1440 / 60 + "小时" + minute % 1440 % 60 + "分钟";
            }
        } else if (timeType == 2) {
            if (minute >= 0 && minute < 3600) {
                return minute / 60 + "分钟";
            }
            if (minute >= 3600 && minute < 5184000) {
                return minute / 3600 + "小时" + minute % 3600 + "分钟";
            }
            if (minute >= 5184000) {
                return minute / 5184000 + "天" + minute % 5184000 / 3600 + "小时" + minute % 5184000 % 3600 + "分钟";
            }
        }
        return "0";
    }

    /**
     * 根据用户生日计算年龄
     */
    public static int getAgeByBirthday(Date birthday) {
        Calendar cal = Calendar.getInstance();

        if (cal.before(birthday)) {
            throw new IllegalArgumentException(
                    "The birthDay is before Now.It's unbelievable!");
        }
        int yearNow = cal.get(Calendar.YEAR);
        cal.setTime(birthday);
        int yearBirth = cal.get(Calendar.YEAR);
        int age = yearNow - yearBirth + 1;

        return age;
    }

    /**
     * 是否在指定时间段之间
     *
     * @param judgeTime
     * @param beginTime
     * @param endTime
     * @param flag      0-[beginTime<=judgeTime<=endTime]
     *                  1-[beginTime<judgeTime<=endTime]
     *                  2-[beginTime<=judgeTime<endTime]
     *                  3-[beginTime<judgeTime<endTime]
     * @return
     */
    public static boolean isBetweenTimes(Date judgeTime, Date beginTime, Date endTime, int flag) {
        switch (flag) {
            case 0:
                return (beginTime.getTime() <= judgeTime.getTime() && judgeTime.getTime() <= endTime.getTime());
            case 1:
                return (beginTime.getTime() < judgeTime.getTime() && judgeTime.getTime() <= endTime.getTime());
            case 2:
                return (beginTime.getTime() <= judgeTime.getTime() && judgeTime.getTime() < endTime.getTime());
            case 3:
                return (beginTime.getTime() < judgeTime.getTime() && judgeTime.getTime() < endTime.getTime());
        }
        return false;
    }

}