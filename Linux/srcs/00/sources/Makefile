OBJECTS = main.o read.o write.o
SRCS = main.c read.c write.c

CC = gcc
CFLAGS = -g -c -Wall -Wextra -Werror
TARGET = test

$(TARGET) : $(OBJECTS)
	$(CC) -o $(TARGET) $(OBJECTS)
clean :
	rm -rf $(OBJECTS) $(TARGET) core
fclean : clean
	rm -rf $(TARGET)
main.o : io.h main.c
read.o : io.h read.c
write.o : io.h write.c
