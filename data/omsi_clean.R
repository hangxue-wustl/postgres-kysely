library(dplyr)
library(utils)

osmi19 <- read.csv("2019.csv", na.strings = c("", "NA"))
osmi20 <- read.csv("2020.csv", na.strings = c("", "NA"))
osmi21 <- read.csv("2021.csv", na.strings = c("", "NA"))
osmi22 <- read.csv("2022.csv", na.strings = c("", "NA"))
osmi23 <- read.csv("2023.csv", na.strings = c("", "NA"))
col_to_keep = c("What.is.your.age.", "What.is.your.gender.", "What.is.your.race.",
                "Do.you..currently..have.a.mental.health.disorder.")
df19 <- osmi19[col_to_keep]
df19 <- df19 %>% rename(
                        race = What.is.your.race.,
                        gender = What.is.your.gender.,
                        age = What.is.your.age.,
                        mental_health = Do.you..currently..have.a.mental.health.disorder.)
df19$year <- 2019

df20 <- osmi20[col_to_keep]
df20 <- df20 %>% rename(
  race = What.is.your.race.,
  gender = What.is.your.gender.,
  age = What.is.your.age.,
  mental_health = Do.you..currently..have.a.mental.health.disorder.)
df20$year <- 2020

df21 <- osmi21[col_to_keep]
df21 <- df21 %>% rename(
  race = What.is.your.race.,
  gender = What.is.your.gender.,
  age = What.is.your.age.,
  mental_health = Do.you..currently..have.a.mental.health.disorder.)
df21$year <- 2021

df22 <- osmi22[col_to_keep]
df22 <- df22 %>% rename(
  race = What.is.your.race.,
  gender = What.is.your.gender.,
  age = What.is.your.age.,
  mental_health = Do.you..currently..have.a.mental.health.disorder.)
df22$year <- 2022

df23 <- osmi23[col_to_keep]
df23 <- df23 %>% rename(
  race = What.is.your.race.,
  gender = What.is.your.gender.,
  age = What.is.your.age.,
  mental_health = Do.you..currently..have.a.mental.health.disorder.)
df23$year <- 2023

df <- rbind(df20, df19)
df <- rbind(df, df21)
df <- rbind(df, df22)
df <- rbind(df, df23)
df[is.na(df)] <- "NA"
write.csv(df, "omsi_cleaned.csv", row.names = FALSE)
